var arr = new Array();
function IndexPageMaker() {

    let _baseConfig = null;
    let _topProviders = null;

    this.createHeader = function (config) {
        _baseConfig = config;
        let header = createElement({ name: "header", class: "relative" });

        let header_img = createElement({ name: "img", class: "img header-image", src: "img/index_up.png" });

        let flag_div = createElement({ name: "div", class: " absolute flag-pos" });

        let img_az = createElement({ name: "img", src: _baseconfig.azeFlag });

        let img_rus = createElement({ name: "img", src: _baseconfig.rusFlag });

        let img_eng = createElement({ name: "img", src: _baseconfig.engFlag });



        flag_div.appendChild(img_az);
        flag_div.appendChild(img_rus);
        flag_div.appendChild(img_eng);

        header.appendChild(header_img);
        header.appendChild(flag_div);

        let logo_img = createElement({ name: "img", class: "img logo_image", src: "img/logo-emanat.png" });
        let info_img = createElement({ name: "img", class: "img info_image", src: "img/info.png" });

        let logo_container = createElement({ name: "div", class: "logo-container" });
        logo_container.appendChild(logo_img);
        logo_container.appendChild(info_img);
        header.appendChild(logo_container);
        document.body.appendChild(header);
    };

    this.createTopProviders = function (config) {
        _topProviders = config;
        //create main container for top elements
        let divContainer = createElement({ name: "div", class: "top-element-container" });

        //get elements count in top provider
        let count = objectLength(_topProviders);

        //get total width of every item in block
        let totalItemwidth = (100 / count) - 1;

        //convert object to array and sort by order
        let providersArray = new Array();
        for (let item in _topProviders) {
            providersArray.push(_topProviders[item]);
        }
        providersArray.sort(function (a, b) {
            return a.order - b.order;
        });

        //dynamicly create elements and add to main container
        for (let obj of providersArray) {

            let btn_div = createElement({ name: "div", class: "top-img-container relative", bgColor: obj.bgColor });
            let btn_div_img = createElement({ name: "img", class: "top-img-item absolute", src: obj.image });
            let btn_div_p = createElement({ name: "p", class: "top-text-item absolute", text: obj.name });
            btn_div.style.width = totalItemwidth + "%";

            btn_div.appendChild(btn_div_img);
            btn_div.appendChild(btn_div_p);

            btn_div.addEventListener("click", function () {
                document.location.href = "provider.html";
            });

            divContainer.appendChild(btn_div);
        }

        document.body.appendChild(divContainer);
    };

    this.configureHeader = function (callback) {
        _baseconfig = callback();
        return this;
    };
    this.configureTopProviders = function (callback) {
        _topProviders = callback();
        return this;
    };

    this.build = function () {
        this.createHeader(_baseconfig);
        this.createTopProviders(_topProviders);
    };
}
