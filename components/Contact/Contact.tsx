import styles from './Contact.module.scss'

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3>Contact</h3>
        <h1>Get in touch</h1>
        <div className={styles.wrapper}>
          <div className={styles.leftWrapper}>
            <img src="/assets/contact2.jpg" alt="" />
          </div>
          <div className={styles.rightWrapper}>
            <h2 className={styles.title}>Let&apos;s Talk</h2>
            <form>
              <main>
                <div className="flex flex-col">
                  <label>Name</label>
                  <input type="text" />
                </div>
                <div className="flex flex-col">
                  <label>Phone Number</label>
                  <input type="text" />
                </div>
              </main>
              <div className="flex flex-col py-2">
                <label>Email</label>
                <input type="text" />
              </div>
              <div className="flex flex-col py-2">
                <label>Comments</label>
                <textarea rows={10}></textarea>
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
