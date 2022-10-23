import { priceList } from "./constants";
import _ from "lodash";

/**
 * OPENING SPECIALS:
 *
 * we're going to have a 3-for-2 deal on Apple TVs. For example, if you buy 3 Apple TVs, you will pay the price of 2 only
 * the brand new Super iPad will have a bulk discount applied, where the price will drop to $499.99 each if someone buys more than 4
 * we will bundle in a free VGA adapter free of charge with every MacBook Pro sold
 */

const VGA = "vga";
const ATV = "atv";
const IPD = "ipd";
const MBP = "mbp";

const processDiscountForAppleTV = (allItems) => {
  const appleTv = _.filter(allItems, (item) => item.code === ATV);
  if (appleTv?.length >= 3) {
    const notAppleTv = _.filter(allItems, (item) => item.code !== ATV);
    const bundledPriceCount = Math.floor(appleTv?.length / 3);
    const remaining = appleTv?.length - bundledPriceCount * 3;
    const atv = _.filter(priceList, (item) => item.code === ATV)[0];
    let newList = [...Array(bundledPriceCount).keys()].map((item) => {
      return {
        ...atv,
        price: atv.price * 2,
        oldPrice: atv.price,
        discount: atv.price,
        description: "3 for 2 deal",
      };
    });
    const addtolist = [...Array(remaining).keys()].map((item) => atv);
    return [...newList, ...addtolist, ...notAppleTv];
  }
  return allItems;
};

const processDiscountForIPAD = (allItems) => {
  const ipadItems = _.filter(allItems, (item) => item.code === IPD);

  if (ipadItems?.length >= 4) {
    const nonIpadItems = _.filter(allItems, (item) => item.code !== IPD);
    const discountedPrice = 499.99;
    let discounted = ipadItems.map((item) => {
      const discount = item.price - discountedPrice;
      const newitem = {
        ...item,
        discount,
        price: discountedPrice,
        oldPrice: item.price,
      };
      return newitem;
    });
    return [...discounted, ...nonIpadItems];
  }
  return allItems;
};

const processDiscountForMacbookPro = (allItems) => {
  const macBookPro = _.filter(allItems, (item) => item.code === MBP);
  const vgaItems = _.filter(allItems, (item) => item.code === VGA);
  const nonVgaItems = _.filter(allItems, (item) => item.code !== VGA);

  const macBookProCount = macBookPro?.length;
  const vgaCount = vgaItems?.length;

  if (macBookProCount > 0) {
    if (vgaCount > 0 && vgaCount >= macBookProCount) {
      if (vgaCount >= macBookProCount) {
        let existenceOfVGA = 0;
        const discountedVGAs = vgaItems.map((item) => {
          if (existenceOfVGA < macBookProCount) {
            existenceOfVGA++;
            return { ...item, price: 0, oldPrice: 109.5 };
          }
          return item;
        });
        return [...nonVgaItems, ...discountedVGAs];
      }
    } else {
      let newList = [];
      const vgaItems = _.filter(priceList, (item) => item.code === VGA);

      for (let i in nonVgaItems) {
        const item = nonVgaItems[i];
        newList = [...newList, item];
        if (item.code === MBP) {
          const freeVga = { ...vgaItems[0], price: 0, oldPrice: 109.5 };
          newList = [...newList, freeVga];
        }
      }
      return [...newList];
    }
  }
  return allItems;
};

export const calculateTotalPurchases = (allItems) => {
  return processDiscountForMacbookPro(
    processDiscountForIPAD(processDiscountForAppleTV(allItems))
  );
};

export const calculateTotalPrice = (data) => {
  return _.round(_.sumBy(data, "price"), 2);
};

export const calculateSubTotalPrice = (data) => {
  const updatedData = data.map((item) => {
    if (!item?.oldPrice) {
      return { ...item, oldPrice: item.price };
    }
    return item;
  });
  return _.round(_.sumBy(updatedData, "oldPrice"), 2);
};
