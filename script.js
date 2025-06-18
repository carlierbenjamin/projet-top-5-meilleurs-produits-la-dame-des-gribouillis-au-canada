$(document).ready(function () {
    var $mainMenuItems = $("#main-menu ul").children("li");
    var totalMainMenuItems = $mainMenuItems.length;
    var openedIndex = 3;

    function init() {
        bindEvents();
        if (validIndex(openedIndex)) {
            animateItem($mainMenuItems.eq(openedIndex), true, 700);
        }
    }

    function bindEvents() {
        $mainMenuItems.children(".images").click(function () {
            var newIndex = $(this).parent().index();
            checkAndAnimateItem(newIndex);
        });

        $(".button").hover(
            function () {
                $(this).addClass("hovered");
            },
            function () {
                $(this).removeClass("hovered");
            }
        );

        $(".button").click(function () {
            var newIndex = $(this).index();
            checkAndAnimateItem(newIndex);
        });
    }

    function validIndex(indexToCheck) {
        return indexToCheck >= 0 && indexToCheck < totalMainMenuItems;
    }

    function animateItem($item, toOpen, speed) {
        var $colorImage = $item.find(".Color1, .Color2, .Color3, .Color4, .Color5");
        var itemParam = toOpen ? { width: "420px" } : { width: "140px" };
        var colorImageParam = toOpen ? { left: "0px" } : { left: "140px" };

        $colorImage.animate(colorImageParam, speed);
        $item.animate(itemParam, speed);
    }

    function checkAndAnimateItem(indexToCheckAndAnimate) {
        if (openedIndex === indexToCheckAndAnimate) {
            animateItem($mainMenuItems.eq(indexToCheckAndAnimate), false, 250);
            openedIndex = -1;
        } else if (validIndex(indexToCheckAndAnimate)) {
            if (validIndex(openedIndex)) {
                animateItem($mainMenuItems.eq(openedIndex), false, 250);
            }
            openedIndex = indexToCheckAndAnimate;
            animateItem($mainMenuItems.eq(openedIndex), true, 250);
        }
    }

    init();
});