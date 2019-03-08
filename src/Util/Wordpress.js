const Wordpress = {
  getProjects() {
    const projectsUrl = 'http://wordpress.attenberg.be/index.php/wp-json/wp/v2/work?_embed';
    return  fetch(projectsUrl)
      .then(response => { return response.json();
      }
    ).then(jsonResponse => {
        return jsonResponse.map(post => ({
          id: post.id,
          title: post.title.rendered,
          content: post.content.rendered,
          link: post.link,
          featureImage: post._embedded['wp:featuredmedia'][0],
      }))
    });
  }
}

export default Wordpress;
