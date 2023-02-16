import Link from "next/link";
import {ReactNode} from "react";

interface ProductCard {
  /**
   * Link target
   */
  href: string;

  /**
   * What goes in the image box
   */
  children: ReactNode;

  /**
   * Label for the card
   */
  label: string;

  /**
   * How much gas this is estimated to cost
   */
  estimatedGas: number | null;
}

const MeyersBriggsResults = ({href, label, estimatedGas, children}: (ProductCard)) => {
  return (
    <Link href={href} className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <div className="h-full w-full object-cover object-center group-hover:opacity-75 aspect-square">
          {children}
        </div>
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{label}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">Ξ {estimatedGas}</p>
    </Link>
  )
}

export default MeyersBriggsResults;