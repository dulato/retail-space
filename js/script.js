Vue.directive('scroll', {
    inserted: function (el, binding) {
        let f = function (evt) {
            if (binding.value(evt, el)) {
                window.removeEventListener('scroll', f)
            }
        }
      window.addEventListener('scroll', f)
    }
});

var myApp = new Vue({
    el: "#app",
    data() {
        return {
            blockHidden: false,
            isActive: false,
            isWrong: false,
            menuOpen: false,
        }
    },
    methods: {
        showBlocks () {
            this.blockHidden = true
        },
        hideBlocks () {
            this.blockHidden = false
        },
        onScroll(e) {
            this.scrollTop = e.target.scrollTop;
            this.color = (e.target.scrollTop > 100) ? 'isActive: true' : 'isActive: false';
        },
        handleScroll: function (evt, el) {
            if (window.scrollY > 200) {
              this.isActive = true
            }
            else {
                this.isActive = false
            }
        },
        maskFunc() {
            var element = document.getElementById('main5_form_tel');
            var maskOptions = {
              mask: '+{7} (000)-000-0000'
            };
            var mask = IMask(element, maskOptions);
        },
        changeFun() {
            var elem = document.getElementById('main5_form_tel');
            if (elem.value.length < 17) {
                this.isWrong = true;
            }
            else {
                this.isWrong = false;
            }
        },
    },
});


