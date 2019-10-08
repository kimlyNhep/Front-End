var cardController = (function() {
  var Card = function(id, imgSrc, category, title, author) {
    (this.id = id),
      (this.imgSrc = imgSrc),
      (this.category = category),
      (this.title = title),
      (this.author = author);
  };

  var cardList = []; // list of card
  return {
    addCard: function(imgSrc, category, title, author) {
      let ID;
      if (cardList.length > 0) {
        ID = cardList[cardList.length - 1].id + 1;
      } else ID = 0;
      let cardItem = new Card(ID, imgSrc, category, title, author);

      //push card to card list
      cardList.push(cardItem);

      //return new element
      return cardItem;
    },
    getCardList: function() {
      return cardList;
    }
  };
})();

var UIController = (function() {
  let DOMString = {
    rootCard: "cards__root"
  };

  return {
    getDOMString: function() {
      return DOMString;
    },
    addCardList: function(cardObj) {
      let htmlText = `<article class="card card__format" id="card__%id%">
                        <div class="card__info-hover">
                          <svg class="card__like" viewBox="0 0 24 24">
                            <path
                              fill="#000000"
                              d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"
                            />
                          </svg>
                          <div class="card__clock-info">
                            <svg class="card__clock" viewBox="0 0 24 24">
                              <path
                                d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z"
                              /></svg
                            ><span class="card__time">15 min</span>
                          </div>
                        </div>
                        <div class="card__img" style="background-image: %Src%"></div>
                        <a href="#" class="card_link">
                          <div class="card__img--hover" style="background-image: %Src%"></div>
                        </a>
                        <div class="card__info">
                          <span class="card__category">%category%</span>
                          <h3 class="card__title">%title%</h3>
                          <span class="card__by"
                            >by
                            <a href="#" class="card__author" title="author"
                              >%author%</a
                            ></span
                          >
                        </div>
                      </article>`;
      let newHtml = htmlText.replace("%id%", cardObj.id);
      newHtml = newHtml.replace(new RegExp("%Src%", "g"), cardObj.imgSrc);
      newHtml = newHtml.replace("%category%", cardObj.category);
      newHtml = newHtml.replace("%title%", cardObj.title);
      newHtml = newHtml.replace("%author%", cardObj.author);
      document
        .getElementById(DOMString.rootCard)
        .insertAdjacentHTML("beforeend", newHtml);
    }
  };
})();

var globalController = (function(cardCtrl, UICtrl) {
  var DOM = UICtrl.getDOMString();
  var setupEventListener = function() {
    document
      .getElementById(DOM.rootCard)
      .addEventListener("click", function(event) {
        let itemID = event.target.parentNode.parentNode.id;
        splitID = itemID.split("__");
        ID = splitID[1];
        if (ID !== "" && !isNaN(ID)) {
          // Set ID to URL
          location.href = "./contentView.html?" + ID;
        }
      });
  };
  var addCard = function() {
    /*ល្ខោនខោល */

    // 1. add card to list
    let cardItem = cardCtrl.addCard(
      `url('./images/lakhon-khol.jpg')`,
      "ល្ខោនខោល",
      "ល្ខោនខោល ឬ ល្ខោនពាក់របាំងមុខ គឺជាល្ខោនមួយដែលមានលក្ខណៈចំណាស់របស់កម្ពុជា...",
      "ក្រសួងវប្បធម៌ និង វិចិត្រសិល្បៈ"
    );
    // 2. add card to UI
    UICtrl.addCardList(cardItem);

    /*ល្ខោនបាសាក់ */

    // 1. add card to list
    cardItem = cardCtrl.addCard(
      `url('./images/basac.jpg')`,
      "ល្ខោនបាសាក់",
      "ល្ខោន​បាសាក់​មាន​ដើម​កំណើត​នៅ​ស្រុក​បាសាក់​ខេត្ត​ឃ្លាំង​ទល់​មុខ​ព្រះ​ត្រពាំង​កម្ពុជា​ក្រោម...",
      "ក្រសួងវប្បធម៌ និង វិចិត្រសិល្បៈ"
    );
    // 2. add card to UI
    UICtrl.addCardList(cardItem);

    /*ល្ខោនស្រមោលស្បែកធំ*/

    // 1. add card to list
    cardItem = cardCtrl.addCard(
      `url('./images/sbek__thom.jpg')`,
      "ល្ខោនស្រមោលស្បែកធំ",
      "ល្ខោនស្បែកធំ គឺជាល្ខោនដែលមានវ័យចំណាស់បំផុត ក្នុងប្រទេសកម្ពុជាដែលអាចជាសំណល់ ពីសម័យបុរាណ...",
      "ក្រសួងវប្បធម៌ និង វិចិត្រសិល្បៈ"
    );
    // 2. add card to UI
    UICtrl.addCardList(cardItem);

    /*ល្ខោនស្រមោលស្បែកតូច*/

    // 1. add card to list
    cardItem = cardCtrl.addCard(
      `url('./images/sbek__touch.jpg')`,
      "ល្ខោនស្រមោលស្បែកតូច",
      "ល្ខោនស្បែកតូច ត្រូវបានគេស្គាល់ក្នុងភូមិកំពង់តាយ៉ុង ខេត្តសៀមរាប។ តុក្កតាធ្វើពីស្បែកសត្វស្លាប់ ដៃនិងជើងអាចធ្វើចលនា...",
      "ក្រសួងវប្បធម៌ និង វិចិត្រសិល្បៈ"
    );
    // 2. add card to UI
    UICtrl.addCardList(cardItem);

    /*ល្ខោនសមហោរី*/

    // 1. add card to list
    cardItem = cardCtrl.addCard(
      `url('./images/MoHory.jpg')`,
      "ល្ខោនមហោរី",
      "ល្ខោនមហោរី គឺជាសិល្បៈចំណាស់ និងជាទម្រង់នៃរបាំ ដែលបានបង្កើតនៅក្នុងឆ្នាំ១៩៦០ ដោយ ផ្អែកទៅលើចម្រៀងមហោរី ការរាំ និងការនិយាយគ្នា។",
      "ក្រសួងវប្បធម៌ និង វិចិត្រសិល្បៈ"
    );
    // 2. add card to UI
    UICtrl.addCardList(cardItem);

    /*ល្ខោនយីកេ*/

    // 1. add card to list
    cardItem = cardCtrl.addCard(
      `url('./images/Yii-Ke.jpg')`,
      "ល្ខោនយីកេ",
      "ល្ខោនស្បែកធំ គឺជាល្ខោនដែលមានវ័យចំណាស់បំផុត ក្នុងប្រទេសកម្ពុជាដែលអាចជាសំណល់ ពីសម័យបុរាណ...",
      "ក្រសួងវប្បធម៌ និង វិចិត្រសិល្បៈ"
    );
    // 2. add card to UI
    UICtrl.addCardList(cardItem);

    /*ល្ខោនពោលស្រី*/

    // 1. add card to list
    cardItem = cardCtrl.addCard(
      `url('./images/PolSrey.jpg')`,
      "ល្ខោនស្រមោលស្បែកតូច",
      "ល្ខោនស្បែកធំ គឺជាល្ខោនដែលមានវ័យចំណាស់បំផុត ក្នុងប្រទេសកម្ពុជាដែលអាចជាសំណល់ ពីសម័យបុរាណ...",
      "ក្រសួងវប្បធម៌ និង វិចិត្រសិល្បៈ"
    );
    // 2. add card to UI
    UICtrl.addCardList(cardItem);

    /*ល្ខោននិយាយ*/

    // 1. add card to list
    cardItem = cardCtrl.addCard(
      `url('./images/Niyey.jpg')`,
      "ល្ខោនស្រមោលស្បែកតូច",
      "ល្ខោនស្បែកធំ គឺជាល្ខោនដែលមានវ័យចំណាស់បំផុត ក្នុងប្រទេសកម្ពុជាដែលអាចជាសំណល់ ពីសម័យបុរាណ...",
      "ក្រសួងវប្បធម៌ និង វិចិត្រសិល្បៈ"
    );
    // 2. add card to UI
    UICtrl.addCardList(cardItem);
  };
  return {
    init: function() {
      addCard();
      setupEventListener();
    }
  };
})(cardController, UIController);

globalController.init();
