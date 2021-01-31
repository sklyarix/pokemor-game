import s from './Layout.module.css';
console.log(s)

const Layout = ({title,descr,id,urlBg,colorBg}) => {
    return(
        <section className={s.root} id={id} style={{backgroundImage: urlBg ? `url(${urlBg})` : 'none', backgroundColor: colorBg}}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>{title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={s.desc,s.full}>
                        <p>{descr}</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout


