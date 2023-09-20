import React from "react";
import "../../components/footer/Footer.scss";
import Logo from "../../images/logo-beyaz.svg";
import GooglePlay from "../../images/GooglePlay.png";
import AppleStore from "../../images/AppleStore.png";
import { useParams } from "react-router-dom";
import FooterMobile from "../../images/FooterMobile.png";
import FooterCard from "../../images/FooterCard.png";

const Footer = () => {
  const { name } = useParams();
  return (
    <div className="footerMenu">
      <div className="footerTitle">
        <img src={Logo} />
        <span className="footerLine">|</span>
        <p className="footerText">
          Bubilet, organizatörler tarafından düzenlenen farklı kategorilerdeki
          etkinlikleri, dijital medya platformlarını kullanarak milyonlara
          ulaştıran yeni nesil online bilet satış sitesidir.
        </p>
        <div className="footerIcons">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            fit=""
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <path
              className="facebook"
              d="M9.08803 25V13.2693H6V9.04565H9.08803V5.43812C9.08803 2.6033 10.9121 0 15.1153 0C16.8171 0 18.0754 0.163875 18.0754 0.163875L17.9763 4.10803C17.9763 4.10803 16.6929 4.09548 15.2925 4.09548C13.7768 4.09548 13.5339 4.7971 13.5339 5.96162V9.04565H18.0968L17.8982 13.2693H13.5339V25H9.08803Z"
              fill="currentColor"
            ></path>
          </svg>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            fit=""
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <path
              d="M11.999 7.37695C10.7726 7.37695 9.59651 7.86412 8.72934 8.73129C7.86217 9.59846 7.375 10.7746 7.375 12.001C7.375 13.2273 7.86217 14.4034 8.72934 15.2706C9.59651 16.1378 10.7726 16.625 11.999 16.625C13.2254 16.625 14.4015 16.1378 15.2687 15.2706C16.1358 14.4034 16.623 13.2273 16.623 12.001C16.623 10.7746 16.1358 9.59846 15.2687 8.73129C14.4015 7.86412 13.2254 7.37695 11.999 7.37695ZM11.999 15.004C11.2023 15.004 10.4382 14.6875 9.87485 14.1241C9.31149 13.5607 8.995 12.7967 8.995 12C8.995 11.2032 9.31149 10.4392 9.87485 9.8758C10.4382 9.31245 11.2023 8.99595 11.999 8.99595C12.7957 8.99595 13.5598 9.31245 14.1232 9.8758C14.6865 10.4392 15.003 11.2032 15.003 12C15.003 12.7967 14.6865 13.5607 14.1232 14.1241C13.5598 14.6875 12.7957 15.004 11.999 15.004Z"
              fill="currentColor"
            ></path>
            <path
              d="M16.806 8.28491C17.4014 8.28491 17.884 7.80227 17.884 7.20691C17.884 6.61154 17.4014 6.12891 16.806 6.12891C16.2107 6.12891 15.728 6.61154 15.728 7.20691C15.728 7.80227 16.2107 8.28491 16.806 8.28491Z"
              fill="currentColor"
            ></path>
            <path
              d="M20.533 6.11088C20.3015 5.51306 19.9477 4.97017 19.4943 4.51694C19.0409 4.06372 18.4979 3.71015 17.9 3.47888C17.2003 3.21624 16.4611 3.07422 15.714 3.05888C14.751 3.01688 14.446 3.00488 12.004 3.00488C9.56195 3.00488 9.24895 3.00488 8.29395 3.05888C7.54734 3.07344 6.80871 3.21548 6.10995 3.47888C5.51189 3.70988 4.96872 4.06335 4.51529 4.51661C4.06186 4.96987 3.70818 5.51291 3.47695 6.11088C3.21426 6.81049 3.07257 7.54972 3.05795 8.29688C3.01495 9.25888 3.00195 9.56388 3.00195 12.0069C3.00195 14.4489 3.00195 14.7599 3.05795 15.7169C3.07295 16.4649 3.21395 17.2029 3.47695 17.9039C3.70883 18.5016 4.06285 19.0445 4.51639 19.4977C4.96993 19.9509 5.51302 20.3045 6.11095 20.5359C6.80839 20.8091 7.54732 20.9613 8.29595 20.9859C9.25895 21.0279 9.56395 21.0409 12.006 21.0409C14.448 21.0409 14.761 21.0409 15.716 20.9859C16.4631 20.9707 17.2022 20.829 17.902 20.5669C18.4997 20.3351 19.0426 19.9812 19.4959 19.5279C19.9493 19.0745 20.3031 18.5316 20.535 17.9339C20.798 17.2339 20.939 16.4959 20.954 15.7479C20.997 14.7859 21.01 14.4809 21.01 12.0379C21.01 9.59488 21.01 9.28488 20.954 8.32788C20.9423 7.57015 20.7999 6.82013 20.533 6.11088ZM19.315 15.6429C19.3085 16.2192 19.2033 16.7901 19.004 17.3309C18.8538 17.7197 18.6239 18.0729 18.329 18.3676C18.0342 18.6622 17.6809 18.8919 17.292 19.0419C16.7572 19.2403 16.1923 19.3455 15.622 19.3529C14.672 19.3969 14.404 19.4079 11.968 19.4079C9.52995 19.4079 9.28095 19.4079 8.31295 19.3529C7.74288 19.3459 7.17828 19.2407 6.64395 19.0419C6.25364 18.8929 5.89895 18.6636 5.60284 18.3688C5.30673 18.0741 5.07579 17.7205 4.92495 17.3309C4.7284 16.7959 4.62326 16.2317 4.61395 15.6619C4.57095 14.7119 4.56095 14.4439 4.56095 12.0079C4.56095 9.57088 4.56095 9.32188 4.61395 8.35288C4.62042 7.7769 4.72561 7.2063 4.92495 6.66588C5.22995 5.87688 5.85495 5.25588 6.64395 4.95388C7.17854 4.75602 7.74298 4.65085 8.31295 4.64288C9.26395 4.59988 9.53095 4.58788 11.968 4.58788C14.405 4.58788 14.655 4.58788 15.622 4.64288C16.1924 4.64974 16.7573 4.75495 17.292 4.95388C17.6809 5.10416 18.0341 5.33408 18.3289 5.62891C18.6238 5.92374 18.8537 6.27695 19.004 6.66588C19.2005 7.20083 19.3056 7.76504 19.315 8.33488C19.358 9.28588 19.369 9.55288 19.369 11.9899C19.369 14.4259 19.369 14.6879 19.326 15.6439H19.315V15.6429Z"
              fill="currentColor"
            ></path>
          </svg>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            fit=""
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.935 14.628V9.008L15.338 11.828L9.935 14.628ZM21.8 8.035C21.8 8.035 21.605 6.656 21.005 6.049C20.245 5.253 19.392 5.249 19.001 5.202C16.203 5 12.004 5 12.004 5H11.996C11.996 5 7.798 5 4.999 5.202C4.608 5.249 3.756 5.252 2.995 6.049C2.395 6.656 2.2 8.035 2.2 8.035C2.2 8.035 2 9.653 2 11.272V12.789C2 14.407 2.2 16.026 2.2 16.026C2.2 16.026 2.395 17.404 2.995 18.011C3.755 18.808 4.755 18.782 5.2 18.866C6.8 19.019 12 19.066 12 19.066C12 19.066 16.203 19.06 19.001 18.858C19.392 18.811 20.245 18.808 21.005 18.011C21.605 17.404 21.8 16.026 21.8 16.026C21.8 16.026 22 14.407 22 12.789V11.272C22 9.653 21.8 8.035 21.8 8.035Z"
              fill="currentColor"
            ></path>
          </svg>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            fit=""
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <path
              d="M7.85313 23.4375C17.2875 23.4375 22.4484 15.6203 22.4484 8.85311C22.4484 8.63436 22.4484 8.41248 22.4391 8.19373C23.4438 7.46637 24.311 6.56585 25 5.53436C24.0614 5.94819 23.0668 6.22093 22.0484 6.34373C23.1211 5.70254 23.9246 4.69369 24.3094 3.50467C23.3015 4.10174 22.1985 4.52088 21.0484 4.74373C20.2753 3.92033 19.2522 3.37486 18.1376 3.19179C17.0231 3.00873 15.8793 3.1983 14.8833 3.73114C13.8874 4.26397 13.095 5.11034 12.6288 6.13914C12.1626 7.16794 12.0487 8.32175 12.3047 9.42186C10.2652 9.3196 8.27003 8.78978 6.4485 7.86677C4.62698 6.94376 3.01982 5.64818 1.73125 4.06405C1.07709 5.19386 0.877459 6.5303 1.17288 7.80196C1.46831 9.07363 2.23665 10.1852 3.32187 10.9109C2.50866 10.8833 1.71331 10.6649 1 10.2734V10.3437C1.0014 11.5273 1.41142 12.6741 2.16074 13.5902C2.91006 14.5064 3.95273 15.1357 5.1125 15.3719C4.67229 15.4931 4.21755 15.5536 3.76094 15.5515C3.43904 15.5525 3.11778 15.5227 2.80156 15.4625C3.12935 16.4813 3.76761 17.3721 4.62695 18.0101C5.48628 18.6481 6.52365 19.0013 7.59375 19.0203C5.77587 20.4481 3.53031 21.2225 1.21875 21.2187C0.811439 21.2205 0.404411 21.197 0 21.1484C2.34612 22.6441 5.07078 23.4383 7.85313 23.4375Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      <hr className="footerTopLine"></hr>
      <div className="footerLinks">
        <div className="institutional">
          <h3>KURUMSAL</h3>
          <ul>
            <li>HAKKIMIZDA</li>
            <li>GİZLİLİK</li>
            <li>KULLANIM SÖZLEŞMESİ</li>
            <li>KULLANIM KOŞULLARI</li>
            <li>KCKK</li>
            <li>BUBİLET PANEL</li>
            <li>İLETİŞİM</li>
            <li>ÇEREZ POLİTİKASI</li>
          </ul>
        </div>
        <div className="categories">
          <h3>KATEGORİ</h3>
          <ul>
            <li>KONSET</li>
            <li>TİYATRO</li>
            <li>FESTİVAL</li>
            <li>STAND UP</li>
            <li>ÇOCUK AKTİVİTELERİ</li>
            <li>BLOG</li>
          </ul>
        </div>
        <div className="mobileApplication">
          <p>Bubilet uygulamasını indirerek daha hızlı sonuç alabilirsiniz.</p>
          <div className="application">
            <a
              _ngcontent-serverapp-c44=""
              href="https://play.google.com/store/apps/details?id=com.bukupon.android"
              title="Google Market"
              rel="nofollow"
              target="_blank"
            >
              <img
                _ngcontent-serverapp-c44=""
                src={GooglePlay}
                alt="Google Play"
              />
            </a>
            <a
              _ngcontent-serverapp-c44=""
              href="https://apps.apple.com/tr/app/bukupon/id1463201795?platform=iphone"
              title="App Store"
              rel="nofollow"
              target="_blank"
            >
              <img
                _ngcontent-serverapp-c44=""
                src={AppleStore}
                alt="App Store"
              />
            </a>
          </div>
        </div>
      </div>
      <hr className="footerBottomLine"></hr>
      <div className="copyright">
        <div className="card">
          <img src={FooterCard} />
          <p>BuBilet © Tüm Hakları Saklıdır</p>
        </div>
        <div className="registrationNumber">
          <p>Tescil No</p>
          <span>195667</span>
        </div>
        <div className="mersisiNumber">
          <p>Mersis No</p>
          <span>03810468072000</span>
        </div>
        <button>
          <span>Şehir Değiştir</span>
          <br />
          {name}
        </button>
        <img src={FooterMobile} />
      </div>
    </div>
  );
};

export default Footer;
