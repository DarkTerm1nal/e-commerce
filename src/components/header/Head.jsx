import React from 'react'

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <i className="fa fa-phone"></i>
            <label> +7 999 999 99 99</label>
            <i className="fa fa-envelope"></i>
            <label>example@mail.ru</label>
          </div>
          <div className="right row RText">
            <label>Theme FAQ's</label>
            <label>Need Helps</label>
            <span>-</span>
            <label>EN</label>
            <span>-</span>
            <label>USD</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
