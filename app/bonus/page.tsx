import BonusComp from "@/components/BonusComp"

function page() {
  return (
    <div>
      <div className="w-full grid place-items-center px-4 py-2">
        <BonusComp name="Reach 5 Active Users" bonus={500} type="package" status="Claimed" target={5} reached={5} />
        <BonusComp name="Reach 10 Active Users" bonus={1500} type="package" status="notClaimed" target={10} reached={6} />
        <BonusComp name="Reach 20 Active Users" bonus={2500} type="package" status="notClaimed" target={20} reached={6} />
        <BonusComp name="Reach 50 Active Users" bonus={5000} type="package" status="notClaimed" target={50} reached={6} />
      </div>
    </div>
  )
}

export default page