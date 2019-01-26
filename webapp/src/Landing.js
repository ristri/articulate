import React, { Component } from 'react';
import './landing.css'


class Landing extends Component {
  render() {
              return (
          
                <div className="body-wrap boxed-container">
                  <header className="site-header">
                    <div className="container">
                      <div className="site-header-inner">
                        <div className="brand header-brand">
                          <h1 className="m-0">
                            <a href="#">
                              <img src="https://img.icons8.com/color/50/000000/rocket.png" className="image" />
                            </a>
                          </h1>
                        </div>
                      </div>
                    </div>
                  </header>
                  <main>
                    <section className="hero text-center">
                      <div className="container-sm">
                        <div className="hero-inner">
                          <h1 className="hero-title h2-mobile mt-0 is-revealing">Change Your Habit Of Reading</h1>
                          <p className="hero-paragraph is-revealing">100% automatically – in 5 seconds – without a single click
                          </p>
                          <p className="hero-paragraph is-revealing">So much of what we learn day-to-day is through observation and visualizing. So why not make our articles more interesting ? Our tool grabs important part of your article, finds images relavent to it and makes a video to grab interesting out of uninteresting articles.<br />Read faster, Read Better.
                          </p>
                          <div className="hero-form newsletter-form field field-grouped is-revealing">
                            <div className="control control-expanded">
                              <input className="input" type="url" name="ar-url" placeholder="Your article URL…" />
                            </div>
                            <div className="control">
                              <a className="button button-primary button-block button-shadow" href="#">Go</a>
                            </div>
                          </div>
                          <br />
                          <div className="control"><p className="hero-paragraph is-revealing">Or</p></div>
                          <div className="field-grouped">
                            <div className="control" style={{margin: '0 auto 0 auto'}}>
                              <a className="button is-medium button-primary button-block button-shadow" href="#">Get your Pocket Article</a>
                            </div>
                          </div>
                          <div className="hero-browser">
                            <div className="bubble-3 is-revealing">
                              <svg width={427} height={286} viewBox="0 0 427 286" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <defs>
                                  <path d="M213.5 286C331.413 286 427 190.413 427 72.5S304.221 16.45 186.309 16.45C68.396 16.45 0-45.414 0 72.5S95.587 286 213.5 286z" id="bubble-3-a" />
                                </defs>
                                <g fill="none" fillRule="evenodd">
                                  <mask id="bubble-3-b" fill="#fff">
                                    <use xlinkHref="#bubble-3-a" />
                                  </mask>
                                  <use fill="#4E8FF8" xlinkHref="#bubble-3-a" />
                                  <path d="M64.5 129.77c117.913 0 213.5-95.588 213.5-213.5 0-117.914-122.779-56.052-240.691-56.052C-80.604-139.782-149-201.644-149-83.73c0 117.913 95.587 213.5 213.5 213.5z" fill="#1274ED" mask="url(#bubble-3-b)" />
                                  <path d="M381.5 501.77c117.913 0 213.5-95.588 213.5-213.5 0-117.914-122.779-56.052-240.691-56.052C236.396 232.218 168 170.356 168 288.27c0 117.913 95.587 213.5 213.5 213.5z" fill="#75ABF3" mask="url(#bubble-3-b)" />
                                </g>
                              </svg>
                            </div>
                            <div className="bubble-4 is-revealing">
                              <svg width={230} height={235} viewBox="0 0 230 235" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <defs>
                                  <path d="M196.605 234.11C256.252 234.11 216 167.646 216 108 216 48.353 167.647 0 108 0S0 48.353 0 108s136.959 126.11 196.605 126.11z" id="bubble-4-a" />
                                </defs>
                                <g fill="none" fillRule="evenodd">
                                  <mask id="bubble-4-b" fill="#fff">
                                    <use xlinkHref="#bubble-4-a" />
                                  </mask>
                                  <use fill="#7CE8DD" xlinkHref="#bubble-4-a" />
                                  <circle fill="#3BDDCC" mask="url(#bubble-4-b)" cx={30} cy={108} r={108} />
                                  <circle fill="#B1F1EA" opacity=".7" mask="url(#bubble-4-b)" cx={265} cy={88} r={108} />
                                </g>
                              </svg>
                            </div>
                            <div className="hero-browser-inner is-revealing">
                              <svg width={800} height={450} viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <defs>
                                  <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="browser-a">
                                    <stop stopColor="#F6F8FA" stopOpacity=".48" offset="0%" />
                                    <stop stopColor="#F6F8FA" offset="100%" />
                                  </linearGradient>
                                  <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="browser-b">
                                    <stop stopColor="#F6F8FA" stopOpacity=".48" offset="0%" />
                                    <stop stopColor="#F6F8FA" offset="100%" />
                                  </linearGradient>
                                  <linearGradient x1="100%" y1="-12.816%" x2="0%" y2="-12.816%" id="browser-c">
                                    <stop stopColor="#F6F8FA" stopOpacity={0} offset="0%" />
                                    <stop stopColor="#E3E7EB" offset="50.045%" />
                                    <stop stopColor="#F6F8FA" stopOpacity={0} offset="100%" />
                                  </linearGradient>
                                  <filter x="-500%" y="-500%" width="1000%" height="1000%" filterUnits="objectBoundingBox" id="dropshadow-1">
                                    <feOffset dy={16} in="SourceAlpha" result="shadowOffsetOuter" />
                                    <feGaussianBlur stdDeviation={24} in="shadowOffsetOuter" result="shadowBlurOuter" />
                                    <feColorMatrix values="0 0 0 0 0.12 0 0 0 0 0.17 0 0 0 0 0.21 0 0 0 0.2 0" in="shadowBlurOuter" />
                                  </filter>
                                </defs>
                                <g fill="none" fillRule="evenodd">
                                  <rect width={800} height={450} rx={4} fill="#FFF" style={{mixBlendMode: 'multiply', filter: 'url(#dropshadow-1)'}} />
                                  <rect width={800} height={450} rx={4} fill="#FFF" />
                                  <g fill="url(#browser-a)" transform="translate(47 67)">
                                    <path d="M146 0h122v122H146zM0 0h122v122H0zM292 0h122v122H292zM438 0h122v122H438zM584 0h122v122H584z" />
                                  </g>
                                  <g transform="translate(47 239)" fill="url(#browser-b)">
                                    <path d="M146 0h122v122H146zM0 0h122v122H0zM292 0h122v122H292zM438 0h122v122H438zM584 0h122v122H584z" />
                                  </g>
                                  <path fill="url(#browser-c)" d="M0 146h706v2H0z" transform="translate(47 67)" />
                                  <g transform="translate(0 12)">
                                    <circle fill="#FF6D8B" cx={36} cy={4} r={4} />
                                    <circle fill="#FFCB4F" cx={52} cy={4} r={4} />
                                    <circle fill="#7CE8DD" cx={68} cy={4} r={4} />
                                    <path fill="url(#browser-c)" d="M0 20h800v2H0z" />
                                    <path fill="#E3E7EB" d="M742 2h24v4h-24z" />
                                  </g>
                                  <g>
                                    <path fill="#F6F8FA" d="M47 385h706v32H47z" />
                                    <path fill="#E3E7EB" d="M356 399h88v4h-88z" />
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <div className="bubble-1 is-revealing">
                              <svg width={61} height={52} viewBox="0 0 61 52" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <defs>
                                  <path d="M32 43.992c17.673 0 28.05 17.673 28.05 0S49.674 0 32 0C14.327 0 0 14.327 0 32c0 17.673 14.327 11.992 32 11.992z" id="bubble-1-a" />
                                </defs>
                                <g fill="none" fillRule="evenodd">
                                  <mask id="bubble-1-b" fill="#fff">
                                    <use xlinkHref="#bubble-1-a" />
                                  </mask>
                                  <use fill="#FF6D8B" xlinkHref="#bubble-1-a" />
                                  <path d="M2 43.992c17.673 0 28.05 17.673 28.05 0S19.674 0 2 0c-17.673 0-32 14.327-32 32 0 17.673 14.327 11.992 32 11.992z" fill="#FF4F73" mask="url(#bubble-1-b)" />
                                  <path d="M74 30.992c17.673 0 28.05 17.673 28.05 0S91.674-13 74-13C56.327-13 42 1.327 42 19c0 17.673 14.327 11.992 32 11.992z" fillOpacity=".8" fill="#FFA3B5" mask="url(#bubble-1-b)" />
                                </g>
                              </svg>
                            </div>
                            <div className="bubble-2 is-revealing">
                              <svg width={179} height={126} viewBox="0 0 179 126" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <defs>
                                  <path d="M104.697 125.661c41.034 0 74.298-33.264 74.298-74.298s-43.231-7.425-84.265-7.425S0-28.44 0 12.593c0 41.034 63.663 113.068 104.697 113.068z" id="bubble-2-a" />
                                </defs>
                                <g fill="none" fillRule="evenodd">
                                  <mask id="bubble-2-b" fill="#fff">
                                    <use xlinkHref="#bubble-2-a" />
                                  </mask>
                                  <use fill="#838DEA" xlinkHref="#bubble-2-a" />
                                  <path d="M202.697 211.661c41.034 0 74.298-33.264 74.298-74.298s-43.231-7.425-84.265-7.425S98 57.56 98 98.593c0 41.034 63.663 113.068 104.697 113.068z" fill="#626CD5" mask="url(#bubble-2-b)" />
                                  <path d="M43.697 56.661c41.034 0 74.298-33.264 74.298-74.298s-43.231-7.425-84.265-7.425S-61-97.44-61-56.407C-61-15.373 2.663 56.661 43.697 56.661z" fill="#B1B6F1" opacity=".64" mask="url(#bubble-2-b)" />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section className="features section text-center">
                      <div className="container">
                        <div className="features-inner section-inner has-bottom-divider">
                          <div className="features-wrap">
                            <div className="feature is-revealing">
                              <div className="feature-inner">
                                <div className="feature-icon">
                                  <svg width={80} height={80} xmlns="http://www.w3.org/2000/svg">
                                    <g fill="none" fillRule="evenodd">
                                      <path d="M48.066 61.627c6.628 0 10.087-16.79 10.087-23.418 0-6.627-5.025-9.209-11.652-9.209C39.874 29 24 42.507 24 49.135c0 6.627 17.439 12.492 24.066 12.492z" fillOpacity=".24" fill="#A0A6EE" />
                                      <path d="M26 54l28-28" stroke="#838DEA" strokeWidth={2} strokeLinecap="square" />
                                      <path d="M26 46l20-20M26 38l12-12M26 30l4-4M34 54l20-20M42 54l12-12" stroke="#767DE1" strokeWidth={2} strokeLinecap="square" />
                                      <path d="M50 54l4-4" stroke="#838DEA" strokeWidth={2} strokeLinecap="square" />
                                    </g>
                                  </svg>
                                </div>
                                <h3 className="feature-title">Summarize</h3>
                                <p className="text-sm">Summarize and analyze your argumentative texts, your articles, your scientific texts as well as your well-structured analyses work of art.</p>
                              </div>
                            </div>
                            <div className="feature is-revealing">
                              <div className="feature-inner">
                                <div className="feature-icon">
                                  <svg width={80} height={80} xmlns="http://www.w3.org/2000/svg">
                                    <g fill="none" fillRule="evenodd">
                                      <path d="M48.066 61.627c6.628 0 10.087-16.79 10.087-23.418 0-6.627-5.025-9.209-11.652-9.209C39.874 29 24 42.507 24 49.135c0 6.627 17.439 12.492 24.066 12.492z" fillOpacity=".24" fill="#75ABF3" />
                                      <path d="M34 52V35M40 52V42M46 52V35M52 52V42M28 52V28" stroke="#4D8EF7" strokeWidth={2} strokeLinecap="square" />
                                    </g>
                                  </svg>
                                </div>
                                <h3 className="feature-title">Visualize</h3>
                                <p className="text-sm"> A simple technique can help transform students from passive to active readers while improving their reading comprehension.</p>
                              </div>
                            </div>
                          </div>
                          <div className="features-wrap">
                            <div className="feature is-revealing">
                              <div className="feature-inner">
                                <div className="feature-icon">
                                  <svg width={80} height={80} xmlns="http://www.w3.org/2000/svg">
                                    <g fill="none" fillRule="evenodd">
                                      <path d="M48.066 61.627c6.628 0 10.087-16.79 10.087-23.418 0-6.627-5.025-9.209-11.652-9.209C39.874 29 24 42.507 24 49.135c0 6.627 17.439 12.492 24.066 12.492z" fillOpacity=".32" fill="#FF97AC" />
                                      <path stroke="#FF6D8B" strokeWidth={2} strokeLinecap="square" d="M49 45h6V25H35v6M43 55h2v-2M25 53v2h2M27 35h-2v2" />
                                      <path stroke="#FF6D8B" strokeWidth={2} strokeLinecap="square" d="M43 35h2v2M39 55h-2M33 55h-2M39 35h-2M33 35h-2M45 49v-2M25 49v-2M25 43v-2M45 43v-2" />
                                    </g>
                                  </svg>
                                </div>
                                <h3 className="feature-title">Memorize</h3>
                                <p className="text-sm">Now easily memorize long text with short videos</p>
                              </div>
                            </div>
                            <div className="feature is-revealing">
                              <div className="feature-inner">
                                <div className="feature-icon">
                                  <svg width={80} height={80} xmlns="http://www.w3.org/2000/svg">
                                    <g transform="translate(24 25)" fill="none" fillRule="evenodd">
                                      <path d="M24.066 36.627c6.628 0 10.087-16.79 10.087-23.418C34.153 6.582 29.128 4 22.501 4 15.874 4 0 17.507 0 24.135c0 6.627 17.439 12.492 24.066 12.492z" fillOpacity=".32" fill="#A0EEE5" />
                                      <circle stroke="#39D8C8" strokeWidth={2} strokeLinecap="square" cx={5} cy={4} r={4} />
                                      <path stroke="#39D8C8" strokeWidth={2} strokeLinecap="square" d="M23 22h8v8h-8zM11 10l9 9" />
                                    </g>
                                  </svg>
                                </div>
                                <h3 className="feature-title">Rise above others</h3>
                                <p className="text-sm">Team Rocket gives you an oppertunity to learn faster than you can ever be.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section className="newsletter section">
                      <div className="container-sm">
                        <div className="newsletter-inner section-inner">
                          <div className="newsletter-header text-center is-revealing">
                            <h2 className="section-title mt-0">Stay in the know</h2>
                            <p className="section-paragraph">Expolre our product and let us know how we can improve further</p>
                          </div>
                          <div className="footer-form newsletter-form field field-grouped is-revealing">
                            <div className="control control-expanded">
                              <input className="input" type="email" name="email" placeholder="Your best email…" />
                            </div>
                            <div className="control">
                              <a className="button button-primary button-block button-shadow" href="#">Submit</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </main>
                  <footer className="site-footer text-light">
                    <div className="container">
                      <div className="site-footer-inner">
                        <div className="brand footer-brand">
                          <a href="#">
                            <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                              <title>Ava</title>
                              <defs>
                                <path d="M32 16H16v16H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v14z" id="logo-gradient-footer-a" />
                                <linearGradient x1="50%" y1="50%" y2="100%" id="logo-gradient-footer-b">
                                  <stop stopColor="#FFF" stopOpacity={0} offset="0%" />
                                  <stop stopColor="#FFF" offset="100%" />
                                </linearGradient>
                              </defs>
                              <g fill="none" fillRule="evenodd">
                                <mask id="logo-gradient-footer-c" fill="#fff">
                                  <use xlinkHref="#logo-gradient-footer-a" />
                                </mask>
                                <use fillOpacity=".32" fill="#FFF" xlinkHref="#logo-gradient-footer-a" />
                                <path fill="url(#logo-gradient-footer-b)" mask="url(#logo-gradient-footer-c)" d="M-16-16h32v32h-32z" />
                              </g>
                            </svg>
                          </a>
                        </div>
                        <ul className="footer-links list-reset">
                          <li>
                            <a href="#">Contact</a>
                          </li>
                          <li>
                            <a href="#">About us</a>
                          </li>
                          <li>
                            <a href="#">FAQ's</a>
                          </li>
                          <li>
                            <a href="#">Support</a>
                          </li>
                        </ul>
                        <ul className="footer-social-links list-reset">
                          <li>
                            <a href="#">
                              <span className="screen-reader-text">Facebook</span>
                              <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z" fill="#FFFFFF" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="screen-reader-text">Twitter</span>
                              <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z" fill="#FFFFFF" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="screen-reader-text">Google</span>
                              <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" fill="#FFFFFF" />
                              </svg>
                            </a>
                          </li>
                        </ul>
                        <div className="footer-copyright">© 2019 Articulate, TeamRocket</div>
                      </div>
                    </div>
                  </footer>
                </div>
              );
   
  }
}

export default Landing;