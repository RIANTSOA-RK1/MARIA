import { Button } from "@mui/material"
import './Home.css'



const Home = () => {
  

  return (
    <div className='w-100 d-flex justify-content-center'>
      
          <div className="homeContenu">
              <h1>Bonjour et Bienvenue dans notre Banque</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quidem odio animi, amet dolorem esse modi vero reprehenderit quas, doloremque architecto? Cupiditate quam adipisci omnis perferendis quae maxime, molestias saepe atque laudantium commodi officia asperiores perspiciatis nisi ducimus ut vero ullam odio. A vitae id sequi iste consequatur accusantium repellendus provident necessitatibus, fugit ex praesentium, dolor et maxime nam itaque temporibus, alias iure. Quas vitae sint vero quod corporis obcaecati, totam aliquam et quia consequuntur autem fugit vel maiores fugiat non modi nam corrupti quasi enim perferendis iste magnam incidunt. 
                Molestias, aliquam nostrum. Dolorem eius dolor atque iure sit quasi!</p>
              <div className="d-flex justify-content-center gap-5 mt-5">
                 <Button variant="contained">Visiter le Site</Button>
                 <Button variant="outlined">Voir tous les Services</Button>
              </div>
          </div>
          

    </div>
  )
}

export default Home
