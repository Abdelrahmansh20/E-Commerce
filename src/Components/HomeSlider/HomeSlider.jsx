import image1 from "../../assets/images/XCM_Manual_1396328_4379575_Egypt_EG_BAU_GW_DC_SL_Bags_Wallets_379x304_1X._SY304_CB650636675_.jpg"
import image2 from "../../assets/images/41nN4nvKaAL._AC_SY200_.jpg"
import image3 from "../../assets/images/61cSNgtEISL._AC_SY200_.jpg"
import image4 from "../../assets/images/XCM_Manual_1533480_5305769_379x304_1X._SY304_CB616236518_.jpg"



export default function HomeSlider() {
  return (
    <>
    <div className='grid grid-cols-12 items-center justify-center ml-96 mb-6 mt-12'>
        <div className='col-span-4 '>
            
            <swiper-container style={{height: "100%"}} loop={true}>
    
    <swiper-slide style={{height: "100%"}}>
        <img src={image2} className="w-full h-full object-cover"/>
        </swiper-slide>
    <swiper-slide style={{height: "100%"}}>
        <img src={image3} className="w-full h-full object-cover"/>
        </swiper-slide>

</swiper-container>
        </div>
        <div className='col-span-4'>
            <div className="h-1/2">
                <img src={image1} className="w-full h-full "/>
            </div>
            <div className="h-1/2">
                <img src={image4} className="w-full  h-full"/>
            </div>
        </div>
    </div>
    </>
  )
}
