import style from './ComA.module.css';

function ComA() {
  return (
    <div className={style.overview}>
      {/* Scrolling Image Section */}
      <div className={style.photoMarqueeWrapper}>
        <div className={style.photoMarquee}>
          {/* Original image set */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSej4fyN97OIQFe5S-exVlehtT-AtnA1bR2bg&s"
            alt="img1"
          />
          
        </div>
      </div>

      {/* Text Section */}
      <div className={style.textContent}>
        <h1 className={style.heading}>State Election Commission, Gujarat</h1>
        <p className={style.para}>
          The State Election Commission, Gujarat was established in September 1993 under Article 243K of the Constitution of India. It is responsible for conducting free, fair and transparent elections to urban and rural local bodies, including Municipalities, Panchayats, and Municipal Corporations. The commission plays a crucial role in strengthening grassroots democracy by ensuring smooth electoral processes, voter awareness, and enforcing the model code of conduct in the state.
        </p>
      </div>
    </div>
  );
}

export default ComA;
