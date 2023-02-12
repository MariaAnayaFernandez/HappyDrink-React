
import { PromoBox } from './PromoBox/PromoBox'
import { BannerBox } from './BannerBox/BannerBox'
import { Video } from './Video/Video'


export const Home = () => {
    return (
        <div>
            <Video></Video>
            <PromoBox/>
            <BannerBox/>
           
        </div>
    )
}