'use strict';

var Home = function() {
    var course = $('.home__cours__item');

    if (course.length) {

        var selectors = $('[data-target]');
        var tabs = $('[data-tab]');
        var courseDesc = '.home__cours__item__desc';
        var courseDescExpand = $('.home__cours__item__desc__show');

        function init() {
            selectors.first().addClass('-active');
            tabs.first().addClass('-active');
        }

        if ( selectors && tabs ) {

            selectors.each(function(){
                $(this).on('click',function(){
                    var dataTarget = $(this).data('target');

                    selectors.removeClass('-active');
                    $(this).addClass('-active');

                    tabs.removeClass('-active');
                    tabs.filter(function() {
                        return $(this).data('tab') == dataTarget;
                    }).addClass('-active');
                });
            });

            init();
        }

        courseDescExpand.on('click', function() {
            var $this = $(this);
            var height = $this.siblings('p').outerHeight();
            var height = (height + 30) + 'px';
            var container = $this.parents(courseDesc);

            if (!container.hasClass('-open')) {
                container.css('max-height', height);
                container.addClass('-open');
            } else {
                container.css('max-height', '70px');
                container.removeClass('-open');
            }
        });
    }


    // Inscriptions form
    var inscriptionForm = $("#inscriptions-form");
    var breadcrumbStep = $('[data-index]');

    function nextBreadcrumbStep() {
        var current =  breadcrumbStep.filter(function(){
            return $(this).hasClass('-current');
        });
        var index = current.data('index');
        breadcrumbStep.removeClass('-current');
        breadcrumbStep.filter(function() {
            return $(this).data('index') == index + 1;
        }).addClass('-current');
    }

    
    //Step One Validation
    var stepOne = $('[data-step="0"]');
    var stepOneInputs = stepOne.find('input');
    var stepOneCta = stepOne.find('.home__inscriptions__form__cta');
    var stepOnevalidLimit = stepOneInputs.length;
    var stepOneinputCount = 0;


    function stepOneValidity() {
        if (stepOneinputCount === stepOnevalidLimit - 1) {
            stepOneCta.addClass('-active');
        }
    }

    stepOneInputs.on('change', function(){

        if ( !$(this).hasClass('-dirty') ) {
            $(this).addClass('-dirty');
            stepOneinputCount++;
            stepOneValidity();
        }
    });

    stepOneCta.click(function(){
        stepOne.removeClass('-current');
        stepOne.next().addClass('-current');
        nextBreadcrumbStep();
    });

    //Step Two Validation
    var stepTwo = $('[data-step="1"]');
    var stepTwoInputs = stepTwo.find('input');
    var stepTwoCta = stepTwo.find('.home__inscriptions__form__cta');
    var stepTwovalidLimit = stepTwoInputs.length;
    var stepTwoinputCount = 0;


    function stepTwoValidity() {
        if (stepTwoinputCount === stepTwovalidLimit - 1) {
            stepTwoCta.addClass('-active');
        }
    }

    stepTwoInputs.on('change', function(){

        if ( !$(this).hasClass('-dirty') ) {
            $(this).addClass('-dirty');
            stepTwoinputCount++;
            stepTwoValidity();
        }
    });

    stepTwoCta.click(function(){
        stepTwo.removeClass('-current');
        stepTwo.next().addClass('-current');
        nextBreadcrumbStep();
    });

    //Step Three Validation
    var stepThree = $('[data-step="2"]');
    var stepThreeInputs = stepThree.find('input');
    var stepThreeCta = stepThree.find('.home__inscriptions__form__cta');
    var stepThreeinputCount = 0;


    function stepThreeValidity() {
        if (stepThreeinputCount === 1) {
            stepThreeCta.addClass('-active');
        }
    }

    stepThreeInputs.on('change', function(){
        stepThreeinputCount++;
        stepThreeValidity();
    });

    stepThreeCta.click(function(){
        stepThree.removeClass('-current');
        stepThree.next().addClass('-current');
        nextBreadcrumbStep();
    });

    //Step Four Validation
    var stepFour = $('[data-step="3"]');
    var stepFourInputs = stepFour.find('input');
    var stepFourCta = stepFour.find('.home__inscriptions__form__cta');
    var stepFourvalidLimit = stepFourInputs.length;
    var stepFourinputCount = 0;


    function stepFourValidity() {
        if (stepFourinputCount === stepFourvalidLimit - 1) {
            stepFourCta.addClass('-active');
        }
    }

    stepFourInputs.on('change', function(){

        if ( !$(this).hasClass('-dirty') ) {
            $(this).addClass('-dirty');
            stepFourinputCount++;
            stepFourValidity();
        }
    });

    stepFourCta.click(function(){
        stepFour.removeClass('-current');
        stepFour.next().addClass('-current');
    });
}

module.exports = Home;
