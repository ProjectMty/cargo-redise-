import type { Metadata } from "next";
import BuyAndShipPage from "@/components/buyandship/BuyAndShipPage";
import BuyAndShip from "@/components/buyandship";

export const metadata: Metadata = {
  title: "Buy & Ship | Cargo Monterrey",
  description: "Encuentra proveedores y nosotros hacemos la logística.",
};



export default function BuyAndShipPage() {
  return <BuyAndShip />;
}
