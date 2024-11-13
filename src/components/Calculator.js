import { menus, bundles } from "@/const/mock";
import { useState } from "react";

export default function Calculator() {
  const [checked, setChecked] = useState([]);
  const [haveMemberCard, setHaveMemberCard] = useState(false);
  const [price, setPrice] = useState(0);

  const handleCheck = (item) => {
    if (checked.includes(item.id)) {
      setChecked(checked.filter((temp) => temp !== item.id));
    } else {
      setChecked((prev) => [...prev, item.id]);
    }
  };

  const handleCalculate = () => {
    let temp_price = 0;
    checked.forEach((item) => {
      let temp_amount = document.getElementById(`amount-of-${item}`).value;
      let promotion = bundles.find((bundle) => bundle.bundle_of === item);
      let item_price = menus.find((menu) => menu.id === item).price;
      if (promotion) {
        let times = Math.floor(temp_amount / promotion.amount);
        let remain = temp_amount % promotion.amount;
        temp_price +=
          item_price * temp_amount * (1.0 - promotion.discount * times) +
          item_price * promotion.discount * remain * times;
      } else {
        temp_price += item_price * temp_amount;
      }
    });
    setPrice(haveMemberCard ? temp_price * 0.9 : temp_price);
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-4xl font-bold">Menu:</p>
      <div className="flex flex-col w-1/2 gap-2">
        {menus.map((item) => {
          return (
            <div key={item.id} className="flex justify-between w-full">
              <label className="flex items-center gap-2">
                <input type="checkbox" onChange={() => handleCheck(item)} />
                <p>{item.name}</p>
              </label>
              <div className="flex items-center gap-2">
                <p>{item.price} THB/set</p> {`->`}
                <label className="flex items-center gap-2">
                  Order
                  <input
                    id={`amount-of-${item.id}`}
                    className="p-1 border border-black rounded-lg"
                    type="number"
                    min="1"
                    max="10"
                    defaultValue={1}
                  />
                  item(s)
                </label>
              </div>
            </div>
          );
        })}
      </div>
      <label className="flex gap-2">
        <input type="checkbox" onChange={() => setHaveMemberCard((prev) => !prev)} checked={haveMemberCard} />
        haveMemberCard
      </label>
      <button className="w-1/2 p-2 border border-black rounded-lg" onClick={handleCalculate}>
        Calculate
      </button>
      <p className="text-4xl font-bold">Result:</p>
      <p>{price}</p>
    </div>
  );
}
