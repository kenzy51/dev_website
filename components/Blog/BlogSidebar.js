import React from 'react';
import Link from 'next/link';

const BlogSidebar = () => {
  return (
    <>
      <aside className='widget-area'>
        <section className='widget widget_search'>
          <h3 className='widget-title'>Search</h3>

          <form className='search-form'>
            <label>
              <span className='screen-reader-text'>Search for:</span>
              <input
                type='search'
                className='search-field'
                placeholder='Search...'
              />
            </label>
            <button type='submit'>
              <i className='bx bx-search-alt'></i>
            </button>
          </form>
        </section>

        <section className='widget widget_miran_posts_thumb'>
          <h3 className='widget-title'>Popular Posts</h3>

          <article className='item'>
            <Link href='/single-blog'>
              <a className='thumb'>
                <span className='fullimage cover bg1' role='img'></span>
              </a>
            </Link>
            <div className='info'>
              <span>June 10, 2020</span>
              <h4 className='title usmall'>
                <Link href='/single-blog'>
                  <a>The Data Surrounding Higher Education</a>
                </Link>
              </h4>
            </div>

            <div className='clear'></div>
          </article>

          <article className='item'>
            <Link href='/single-blog'>
              <a className='thumb'>
                <span className='fullimage cover bg2' role='img'></span>
              </a>
            </Link>
            <div className='info'>
              <span>June 21, 2020</span>
              <h4 className='title usmall'>
                <Link href='/single-blog'>
                  <a>
                    Conversion Rate the Sales Funnel Optimization
                  </a>
                </Link>
              </h4>
            </div>

            <div className='clear'></div>
          </article>

          <article className='item'>
            <Link href='/single-blog'>
              <a className='thumb'>
                <span className='fullimage cover bg3' role='img'></span>
              </a>
            </Link>
            <div className='info'>
              <span>June 30, 2020</span>
              <h4 className='title usmall'>
                <Link href='/single-blog'>
                  <a>
                    Business Data is changing the world’s Energy
                  </a>
                </Link>
              </h4>
            </div>

            <div className='clear'></div>
          </article>
        </section>

        <section className='widget widget_categories'>
          <h3 className='widget-title'>Categories</h3>

          <ul>
            <li>
              <a href='#'>
                Design <span className='post-count'>(03)</span>
              </a>
            </li>
            <li>
              <a href='#'>
                Lifestyle <span className='post-count'>(05)</span>
              </a>
            </li>
            <li>
              <a href='#'>
                Script <span className='post-count'>(10)</span>
              </a>
            </li>
            <li>
              <a href='#'>
                Device <span className='post-count'>(08)</span>
              </a>
            </li>
            <li>
              <a href='#'>
                Tips <span className='post-count'>(01)</span>
              </a>
            </li>
          </ul>
        </section>

        <section className='widget widget_tag_cloud'>
          <h3 className='widget-title'>Popular Tags</h3>

          <div className='tagcloud'>
            <a href='#'>
              Business <span className='tag-link-count'> (3)</span>
            </a>
            <a href='#'>
              Design <span className='tag-link-count'> (3)</span>
            </a>
            <a href='#'>
              Aike <span className='tag-link-count'> (2)</span>
            </a>
            <a href='#'>
              Fashion <span className='tag-link-count'> (2)</span>
            </a>
            <a href='#'>
              Travel <span className='tag-link-count'> (1)</span>
            </a>
            <a href='#'>
              Smart <span className='tag-link-count'> (1)</span>
            </a>
            <a href='#'>
              Marketing <span className='tag-link-count'> (1)</span>
            </a>
            <a href='#'>
              Tips <span className='tag-link-count'> (2)</span>
            </a>
          </div>
        </section>

        <section className='widget widget_instagram'>
          <ul>
            <li>
              <div className='box'>
                <img src='/images/blog/blog4.jpg' alt='image' />
                <i className='bx bxl-instagram'></i>
                <a 
                  href='https://www.instagram.com/' 
                  className='link-btn' 
                  target='_blank' 
                  rel="noreferrer"
                ></a>
              </div>
            </li>
            <li>
              <div className='box'>
                <img src='/images/blog/blog5.jpg' alt='image' />
                <i className='bx bxl-instagram'></i>
                <a 
                  href='https://www.instagram.com/' 
                  className='link-btn' 
                  target='_blank' 
                  rel="noreferrer"
                ></a>
              </div>
            </li>
            <li>
              <div className='box'>
                <img src='/images/blog/blog6.jpg' alt='image' />
                <i className='bx bxl-instagram'></i>
                <a 
                  href='https://www.instagram.com/' 
                  className='link-btn' 
                  target='_blank' 
                  rel="noreferrer"
                ></a>
              </div>
            </li>
            <li>
              <div className='box'>
                <img src='/images/blog/blog7.jpg' alt='image' />
                <i className='bx bxl-instagram'></i>
                <a 
                  href='https://www.instagram.com/' 
                  className='link-btn' 
                  target='_blank' 
                  rel="noreferrer"
                ></a>
              </div>
            </li>
            <li>
              <div className='box'>
                <img src='/images/blog/blog8.jpg' alt='image' />
                <i className='bx bxl-instagram'></i>
                <a 
                  href='https://www.instagram.com/' 
                  className='link-btn' 
                  target='_blank' 
                  rel="noreferrer"
                ></a>
              </div>
            </li>
            <li>
              <div className='box'>
                <img src='/images/blog/blog9.jpg' alt='image' />
                <i className='bx bxl-instagram'></i>
                <a 
                  href='https://www.instagram.com/' 
                  className='link-btn' 
                  target='_blank' 
                  rel="noreferrer"
                ></a>
              </div>
            </li>
          </ul>
        </section>
      </aside>
    </>
  )
}

export default BlogSidebar;