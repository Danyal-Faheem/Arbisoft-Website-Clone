import { IndustriesGrid } from "./IndustriesGrid";
import { ProductsGrid } from "./ProductsGrid";
import { ServicesGrid } from "./ServicesGrid";

interface IGridProps {
  gridElement: string;
}

export const Grid = ({ gridElement }: IGridProps) => {
  if (gridElement === "Industries") return <IndustriesGrid />;
  if (gridElement === "Services") return <ServicesGrid />;
  if (gridElement === "Products") return <ProductsGrid />;
};
