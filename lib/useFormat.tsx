type Props = {
    value: number;
  };
  
  export default function useFormat({ value }: Props) {
    const formattedNumber = new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  
    return <>{formattedNumber}</>;
  }
  