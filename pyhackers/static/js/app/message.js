// Generated by CoffeeScript 1.6.3
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  this.Message = (function() {
    function Message() {
      this.showMessage = __bind(this.showMessage, this);
      this.listen();
    }

    Message.prototype.listen = function() {
      var _this = this;
      return $(document).on('click', '[data-trigger="message"]', function(evt) {
        return _this.showMessage(evt);
      });
    };

    Message.prototype.showMessage = function(evt) {
      return console.log("ok");
    };

    return Message;

  })();

  jQuery(function() {
    var msg;
    return msg = new Message();
  });

}).call(this);