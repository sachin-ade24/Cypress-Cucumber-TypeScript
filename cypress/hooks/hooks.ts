import { hpd } from "../pages/homePage/homePageStringsSelectorsEnums";
import { hp } from "../pages/homePage/hpFinctionsMethods";
import { signOff } from "../pages/signInPage/siFunctionsMethods";

import { Before, After } from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
  hp.visitUrl(hpd.strings.HOME_PAGE_URL);
});

After(() => {
  signOff();
});
