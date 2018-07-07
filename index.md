---
layout: home
page-title: Claxon Design Co.
---

<section id="introduction" class="full-aside-right" markdown="1">

<div aria-hidden="true" class="section-title"><span>Introduction</span></div>

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

<div aria-hidden="true" class="section-title"><span>Services</span></div>
{% include sections-services.md %}
</section>

<section markdown="1">  
<div aria-hidden="true" class="section-title"><span>Ethics</span></div>
{% include sections-ethics.md %}
</section>

<section class="light">
<div aria-hidden="true" class="section-title"><span>Work</span></div>

<h2><span data-aos="blank-out" data-aos-duration="0" data-aos-delay="400">Work</span></h2>

<div class="portfolio-list">
  {% for portfolio in site.portfolio %}
    {% if portfolio.homepage %}
      <a class="portfolio-item-link" target="_blank" href="{{ portfolio.link }}">
        <article class="portfolio-item" style="--brand-color: #{{ portfolio.brand-color }};">
          <img class="portfolio-item-image {% if portfolio.filter %}filter{% endif %}" srcset="/assets/images/{{ portfolio.image }}.{{ portfolio.image-extension }} 1x, /assets/images/{{ portfolio.image }}.{{ portfolio.image-extension }} 2x" alt="{{ portfolio.title }} thumbnail">
          <header class="portfolio-item-header">
            <h3><span data-aos="fade-up" class="aos-init aos-animate">{{ portfolio.title }}</span></h3>
          </header>
          <footer class="portfolio-item-footer">
            <p class="intro-type">{{ portfolio.type }}</p>
          </footer>
        </article>
      </a>
    {% endif %}
  {% endfor %}

  {% for lab in site.lab %}
    {% if lab.homepage %}
      <a class="portfolio-item-link" href="/lab/">
        <article class="portfolio-item" {% if lab.display-color %} style="--brand-color: #{{ lab.display-color }}" {% else %} style="--brand-color: var(--black-t3)" {% endif %}>
          <img class="portfolio-item-image" srcset="/assets/images/lab/{{ lab.image }}.jpg 1x, /assets/images/lab/{{ lab.image }}@2x.jpg 2x" alt="{{ lab.title }} thumbnail">
          <header class="portfolio-item-header">
            <h3><span data-aos="fade-up" class="aos-init aos-animate">{{ lab.short-title }}</span></h3>
          </header>
          <footer class="portfolio-item-footer">
            <p class="intro-type">Lab{% if lab.tags %}{% for tag in lab.tags %}, {{ tag }}{% endfor %}{% endif %}</p>
          </footer>
        </article>
      </a>
    {% endif %}
  {% endfor %}
</div>

</section>
<section class="red" markdown="1">  
<div aria-hidden="true" class="section-title"><span>Testimonials</span></div>  
<blockquote class="testimonial"><p>It's been fantastic working with Adam; he's fast and talented, with good creative vision, strong communication skills, and a willingness to collaborate that not all designers&nbsp;possess.</p><footer>— <cite>Kristen Proctor | Founder, Rocket Strategy</cite></footer></blockquote>  

</section>

<section>
<div aria-hidden="true" class="section-title"><span>Contact</span></div>  
  {% include contactform.html %}
</section>
