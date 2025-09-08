import styles from "./Hero.module.css"

export const Hero = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>
                    Lessons and insights <span>from 8 years</span>
                </h1>
                <p>Where to grow your business as a photographer: site or social media?</p>
                <button>Register</button>
            </div>

            <div className={styles.imgcontainer}>
                <img src="/src/media/images/home-illustration.png" alt="" />
            </div>
        </div>
    );
};
