import { Item } from "../Item/Item"



export const ItemList = ({cocteles}) =>{
    return(
        <div className="menu-principal">
            <h2 className="titulo-menu">Menú Happy Drink</h2>
            <hr/>

            <div className="catego">
                <a className="catego-a" href="/menu">Todos |</a>
                <a className="catego-a" href="/menu/clasicos">Clásicos |</a>
                <a className="catego-a" href="/menu/especialidades">Especialidades |</a>
                <a className="catego-a" href="/menu/temporada">Temporada |</a>
            </div>


            <section className="menu-cards row row-cols-1 row-cols-md-3 g-4" >
              {cocteles.map((coc) => <Item key={coc.id} {...coc}/>)}
            </section>

        </div>
    )
}
