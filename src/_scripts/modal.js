'use strict';

// Constructor
var Modal = function() {
    var modal = $('.c-modal');
    var modalTrigger = $('[data-modal]');

    if (modal) {
        modalTrigger.each(function() {
            var $this = $(this);
            var mode = $this.data('modal');

            $this.on('click', function (e) {
                if( mode === 'open' ) {
                    modal.addClass('-open');
                } else if ( mode === 'close' ) {
                    modal.removeClass('-open');
                }
                e.preventDefault();
            });
        });
    }
};

module.exports = Modal;
