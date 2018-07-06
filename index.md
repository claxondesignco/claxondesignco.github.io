---
layout: home
page-title: Claxon Design Co.
---

<section id="introduction" class="full-aside-right" markdown="1">

<div aria-hidden="true" class="section-title" data-section-title="Introduction"></div>  

<div markdown="1" class="hero with-aside">

{::nomarkdown}
<h1>Claxon Design Co. <span class="fancy">of</span> Fort Myers, FL</h1>
{:/}

## A Digital Design Agency

</div>
{::nomarkdown}
<img srcset="/assets/images/hero.jpg 1x, /assets/images/hero@2x.jpg 2x" class="aside" alt="Photograph of a computer on a desk">
{:/}
</section>  

<section class="dark" markdown="1">  

<div aria-hidden="true" class="section-title" data-section-title="Services"></div>  
{% include sections-services.md %}
</section>
<section class="light" markdown="1">  
<div aria-hidden="true" class="section-title" data-section-title="Ethics"></div>  
{% include sections-ethics.md %}
</section>

<section>
<div aria-hidden="true" class="section-title" data-section-title="Work"></div>  

<h2><span data-aos="blank-out" data-aos-duration="0" data-aos-delay="400">Work</span></h2>

<div class="portfolio-list">
  {% for portfolio in site.portfolio %}
    <a class="portfolio-item-link" target="_blank" href="{{ portfolio.link }}">
      <figure class="portfolio-item" style="--brand-color: #{{ portfolio.brand-color }};">
        <img class="portfolio-item-background" srcset="/assets/images/{{ portfolio.background }}.jpeg 1x, /assets/images/{{ portfolio.background }}@2x.jpeg 2x" aria-hidden="true">
        <img class="portfolio-item-image" srcset="/assets/images/{{ portfolio.image }}.{{ portfolio.image-extension }} 1x, /assets/images/{{ portfolio.image }}.{{ portfolio.image-extension }} 2x">
        <figcaption class="portfolio-item-header" alt="{{ portfolio.title }}">
          <p class="intro-type">{{ portfolio.type }}</p>
          <h3>{{ portfolio.title }}</h3>
        </figcaption>
      </figure>
    </a>
  {% endfor %}

  {% for lab in site.lab %}
    <a class="portfolio-item-link" href="/lab/">
      <figure class="portfolio-item" style="--brand-color: var(--black-t3)">
        <img class="portfolio-item-background" srcset="/assets/images/lab/{{ lab.image }}-bg.jpg" aria-hidden="true">
        <img class="portfolio-item-image" srcset="/assets/images/lab/{{ lab.image }}.jpg 1x, /assets/images/lab/{{ lab.image }}@2x.jpg 2x" alt="{{ lab.title }}">
        <figcaption class="portfolio-item-header">
          <p class="intro-type">Lab</p>
          <h3>{{ lab.short-title }}</h3>
        </figcaption>
      </figure>
    </a>
    {% endfor %}
</div>

</section>
<section class="red" markdown="1">  

<div aria-hidden="true" class="section-title" data-section-title="Testimonials"></div>  
<blockquote class="testimonial"><p>It's been fantastic working with Adam; he's fast and talented, with good creative vision, strong communication skills, and a willingness to collaborate that not all designers&nbsp;possess.</p><footer>— <cite>Kristen Proctor | Founder, Rocket Strategy</cite></footer></blockquote>  

</section>

<section>
<div aria-hidden="true" class="section-title" data-section-title="Contact"></div>  
  {% include contactform.html %}
</section>
