$(document).ready(function(){

  //parallax effect
  var scene = document.getElementById('hero');
  var parallax = new Parallax(scene);
  var menuTriggers = document.querySelectorAll('[data-menu-trigger]');
  var sideNavigation = document.querySelector('#side-navigation');
  var sideNavigationItems = document.querySelectorAll('#side-navigation ul a');

  $('.hero').imagesLoaded( { background: true }, function() {
    scene.classList.add('parallax-container--active');
  });

  [].forEach.call(menuTriggers, function(el) {
    el.addEventListener('click', function() {
      sideNavigation.classList.toggle('side-navigation--active');
      return false;
    });
  });

  [].forEach.call(sideNavigationItems, function(el) {
    el.addEventListener('click', function(){
      sideNavigation.classList.remove('side-navigation--active');
    });
  });

  $(function () {

    Handlebars.registerHelper('grouped_each', function(every, context, options) {
      var out = "", subcontext = [], i;
      if (context && context.length > 0) {
        for (i = 0; i < context.length; i++) {
          if (i > 0 && i % every === 0) {
              out += options.fn(subcontext);
              subcontext = [];
          }
          subcontext.push(context[i]);
        }
        out += options.fn(subcontext);
      }
      return out;
    });

    // Grab the template script
    var theTemplateScript = $("#jury-template").html();

    // Compile the template
    var theTemplate = Handlebars.compile(theTemplateScript);

    // Define our data object
    var context={
      jurymembers: [
        {
          name: 'Chloé Allard',
          img: 'chloe-allard.jpg',
          titleFr: 'Co-directrice de la création',
          titleEn: 'Co Creative Director',
          bioFr: '',
          bioEn: '',
          workplace: 'Akufen',
          workUrl: '//www.akufen.ca',
          behance: 'chloeallard',
          dribbble: '',
          facebook: '',
          instagram: '',
          linkedin: '',
          portfolio: '',
          twitter: ''
        },
        {
          name: 'Julie Babin',
          img: 'julie-babin.jpg',
          titleFr: 'Directrice artistique Web',
          titleEn: 'Web Artistic Director',
          bioFr: 'Elle croit que la bonne création est utile, originale, efficace et surprenante. Une réalisation remarquable atteint ses objectifs tout en faisant vivre une expérience  agréable à l\'utilisateur.',
          bioEn: '',
          workplace: 'Agence Über',
          workUrl: '//www.agenceuber.com',
          behance: 'jub',
          dribbble: '',
          facebook: '',
          instagram: '',
          linkedin: 'https://ca.linkedin.com/in/juliebabin',
          portfolio: '',
          twitter: 'jub'
        },
        {
          name: 'Nicolas Baldovini',
          img: 'nicolas-baldovini.jpg',
          titleFr: 'UX lead',
          titleEn: 'UX lead',
          bioFr: 'Ancien Lead Mobile de Nurun Montréal, Nicolas est aujourd\'hui en charge de l\'équipe UX de lg2 avec l\'objectif de livrer un produit de haute qualité jour après jour. Il a collaboré avec des clients tels que Adidas, Nike, SNCF, Tagheuer, Videotron, Groupe Germain, Jean Coutu.',
          bioEn: '',
          workplace: 'lg2',
          workUrl: '//www.lg2.com',
          behance: '',
          dribbble: '',
          facebook: '',
          instagram: '',
          linkedin: 'https://ca.linkedin.com/in/nicolasbaldovini',
          portfolio: '',
          twitter: 'nico2bux'
        },
        {
          name: 'Chrystel Black',
          img: 'chrystel-black.jpg',
          titleFr: 'Directrice design UX',
          titleEn: 'UX design director',
          bioFr: 'Chrystel Black est une pionnière du UX au Québec. Après 10 ans à la tête de Yu Centrik, une des premières agences UX au Canada, elle a décidé de relever le défi de diriger le groupe UX de JDA Software: une équipe multinationale qui définit et déploie les stratégies UX globales de l\'entreprise.',
          bioEn: '',
          workplace: 'jda',
          workUrl: '//www.jda.com',
          behance: '',
          dribbble: '',
          facebook: '',
          instagram: '',
          linkedin: 'https://www.linkedin.com/in/chrystelblack',
          portfolio: '',
          twitter: ''
        },
        {
          name: 'Sebastien Camden',
          img: 'seb-camden.jpg',
          titleFr: 'Directeur artistique & motion designer',
          titleEn: 'Artistic director & Motion designer',
          bioFr: 'À la suite de ses études en design graphique à l’UQAM et à la HEAD Genève, Sebastien a immédiatement entamé la création de son propre studio de création, Pusher. Le studio, qui aura son lancement officiel en 2016, focalise sur le design identitaire, la direction artistique ainsi que le motion design.',
          bioEn: '',
          workplace: 'Pusher Studio',
          workUrl: '//www.pusherstudio.com/',
          behance: '',
          dribbble: '',
          facebook: 'pusherstudio',
          instagram: '',
          linkedin: '',
          portfolio: '',
          twitter: ''
        },
        {
          name: 'Emanuel Cohen',
          img: 'emanuel-cohen.jpg',
          titleFr: 'Directeur de la création',
          titleEn: 'Creative Director',
          bioFr: '',
          bioEn: '',
          workplace: '26 Lettres',
          workUrl: '//www.26lettres.com/',
          behance: 'emanuelcohen',
          dribbble: '',
          facebook: '',
          instagram: 'emanuelcohen',
          linkedin: '',
          portfolio: '',
          twitter: 'emanuel_cohen'
        },
        {
          name: 'Vanda Daftari',
          img: 'vanda-daftari.jpg',
          titleFr: 'Directrice de la création',
          titleEn: 'Creative director',
          bioFr: '',
          bioEn: '',
          workplace: 'Breather',
          workUrl: '//www.breather.com',
          behance: 'v-a-n-d-a',
          dribbble: '',
          facebook: '',
          instagram: '',
          linkedin: '',
          portfolio: '',
          twitter: ''
        },
        {
          name: 'Sylvain Dumais',
          img: 'sylvain-dumais.jpg',
          titleFr: 'Réalisateur multimédia',
          titleEn: 'Multimedia director',
          bioFr: 'Réalisateur multimedia et publicitaire. Son travail cinématographique joint à la fois le tangible (set design, installations, maquettes) et les effets spéciaux (animation 2D et 3D). Il est récipiendaire du prestigieux Young Guns Award 7.',
          bioEn: '',
          workplace: '',
          workUrl: '',
          behance: 'dumais',
          dribbble: '',
          facebook: '',
          instagram: 'dumais',
          linkedin: '',
          portfolio: '//www.dumais.tv',
          twitter: 'dumaisstudio'
        },
        {
          name: 'Marie-Lyse Hamel',
          img: 'marielyse-hamel.jpg',
          titleFr: 'Consultante en ergonomie des interfaces',
          titleEn: 'UX Consultant',
          bioFr: '',
          bioEn: '',
          workplace: '',
          workUrl: '',
          behance: '',
          dribbble: '',
          facebook: '',
          instagram: '',
          linkedin: 'https://www.linkedin.com/in/mlysehamel',
          portfolio: '',
          twitter: ''
        },
        {
          name: 'Fabien Laborie',
          img: 'fabien-laborie.jpg',
          titleFr: 'Directeur artistique',
          titleEn: 'Artistic director',
          bioFr: 'Directeur artistique indépendant, Fabien est accro à la typographie et au web. Il a travaillé pour l\'agence Brad (Lego, CSST, Télé-Québec) et GuestDriven. Il a également créé Nougatine et Motorless, deux polices de caractères qu\'il distribue gratuitement. Il vit et travaille à Montréal.',
          bioEn: '',
          workplace: '',
          workUrl: '',
          behance: 'fabienlaborie',
          dribbble: 'FabienLaborie',
          facebook: '',
          instagram: '',
          linkedin: '',
          portfolio: '//www.fabienlaborie.ca',
          twitter: 'FabienLaborie'
        },
        {
          name: 'Audrée Lapierre',
          img: 'audree-lapierre.jpg',
          titleFr: 'Directrice de la création',
          titleEn: 'Creative director',
          bioFr: 'Audrée aime transformer des données complexes en illustrations claires, informatives et interactives. Elle est souvent invitée à donner des conférences à travers le monde et son travail a été reconnu par AIGA, Kantar IIB, FWA, Numix, et Grafika.',
          bioEn: '',
          workplace: 'FFunction',
          workUrl: '//ffctn.com/index',
          portfolio: '//audreelapierre.com',
          behance: 'audreelapierre',
          dribbble: 'Audree',
          facebook: '',
          instagram: '',
          linkedin: '',
          twitter: 'audreelapierre'
        },
        {
          name: 'JF LeBlanc',
          img: 'jf-leblanc.jpg',
          titleFr: 'Associé principal, directeur de la création',
          titleEn: 'Associate & Creative director',
          bioFr: 'Associé et directeur de création de l’agence LaBase, JF possède une longue feuille de route à titre de designer graphique chez Desjardins Bibeau, Studio DB, VP création chez Station Communications, puis directeur artistique publicitaire chez Cossette, et chef de groupe création chez bleublancrouge.',
          bioEn: '',
          workplace: 'La Base',
          workUrl: '//labase.tv',
          behance: '',
          dribbble: '',
          facebook: '',
          instagram: '',
          linkedin: '',
          portfolio: '',
          twitter: ''
        },
        {
          name: 'Alex Nemeroff',
          img: 'alex-nemeroff.jpg',
          titleFr: 'Chef design et UX',
          titleEn: 'Head of Design & UX',
          bioFr: '',
          bioEn: 'Alex co-founded Dynamo; he heads up Design and UX for clients like Blue Bottle Coffee, OMsignal, Airware and more.',
          workplace: 'Dynamo',
          workUrl: '//www.godynamo.com',
          behance: '',
          dribbble: '',
          facebook: '',
          instagram: '',
          linkedin: '',
          portfolio: '',
          twitter: 'nemy'
        },
        {
          name: 'Serena Ngai',
          img: 'serena-ngai.jpg',
          titleFr: 'Design lead',
          titleEn: 'Design lead',
          bioFr: '',
          bioEn: 'Serena is a design lead at Shopify, where she helps build and mentor UX teams.',
          workplace: 'Shopify',
          workUrl: '//www.shopify.ca',
          behance: '',
          dribbble: '',
          facebook: '',
          instagram: '',
          linkedin: '',
          portfolio: '',
          twitter: 'serenangai'
        },
        {
          name: 'Jean-François Poulin',
          img: 'jean-francois-poulin.jpg',
          titleFr: 'Designer UX et stratège',
          titleEn: 'UX designer and strategist',
          bioFr: 'Jean-François possède plus de 19 ans d’expérience dans ce domaine. Il a dirigé de nombreux projets et développé une spécialité dans les projets de startups. Impliqué dans ses communautés, il est VP de UXPA, en plus d’avoir co-fondé le média Hyperlocal QuartierHochelaga.com, et ToutLeMonde-UX.com.',
          bioEn: '',
          workplace: '',
          workUrl: '',
          behance: '',
          dribbble: '',
          facebook: '',
          instagram: '',
          linkedin: '',
          portfolio: '//www.jfpoulin.com',
          twitter: 'jeffpoulin'
        },
        {
          name: 'Jean-Jacques Stréliski',
          img: 'jeanjacques-streliski.jpg',
          titleFr: 'Professeur associé',
          titleEn: 'Associate Professor',
          bioFr: '',
          bioEn: '',
          workplace: 'HEC Montréal',
          workUrl: '//www.hec.ca/en/',
          behance: '',
          dribbble: '',
          facebook: '',
          instagram: '',
          linkedin: '',
          portfolio: '',
          twitter: 'jjstreliski'
        },
        {
          name: 'Helen Tran',
          img: 'helen-tran.jpg',
          titleFr: 'Product design lead',
          titleEn: 'Product design lead',
          bioFr: '',
          bioEn: 'Helen Tran is a designer living in Toronto working for Shopify as a Design Lead. She has been creating things on the web for 14 years and has been lucky enough to work across different industries in different mediums in both agency and product work. She still likes her job.',
          workplace: 'Shopify',
          workUrl: '//www.shopify.ca',
          behance: '',
          dribbble: 'tranhelen',
          facebook: '',
          instagram: '',
          linkedin: '',
          portfolio: '//helentran.com',
          twitter: 'tranhelen'
        },
        {
          name: 'Sam Vermette',
          img: 'samuel-vermette.jpg',
          titleFr: 'Product designer',
          titleEn: 'Product designer',
          bioFr: '',
          bioEn: 'Sam is the co-founder, CEO and lead product designer at Transit App.',
          workplace: 'Transit App',
          workUrl: '//transitapp.com',
          behance: '',
          dribbble: '',
          facebook: '',
          instagram: '',
          linkedin: '',
          portfolio: '',
          twitter: 'samvermette'
        },
        {
          name: 'Patrick Williams',
          img: 'patrick-williams.jpg',
          titleFr: 'Directeur de la création',
          titleEn: 'Creative Director',
          bioFr: '',
          bioEn: '',
          workplace: 'TP1',
          workUrl: '//www.tp1.ca/',
          behance: 'patsvek',
          dribbble: '',
          facebook: '',
          instagram: '',
          linkedin: 'https://www.linkedin.com/in/patsvek',
          portfolio: '//www.patsvek.com',
          twitter: 'patsvek'
        },
        {
          name: 'Christine Zoltok',
          img: 'christine-zoltok.jpg',
          titleFr: 'Designer',
          titleEn: 'Designer',
          bioFr: '',
          bioEn: 'Christine has been designing experiences for over a decade. As a Designer and Creative Director, she\'s crafted websites and apps and worked on digital strategy for both big brands and small businesses. She\'s currently at Breather, helping design the end-to-end experience of on-demand private space.',
          workplace: 'Breather',
          workUrl: '//www.breather.com',
          behance: '',
          dribbble: '',
          facebook: '',
          instagram: '',
          linkedin: '',
          portfolio: '',
          twitter: 'zoltok'
        }
      ]
    };

    // Pass our data to the template
    var theCompiledHtml = theTemplate(context);

    // Add the compiled html to the page
    $('.content-jury').html(theCompiledHtml);
  });
});

// {
//           name: '',
//           img: '',
//           titleFr: '',
//           titleEn: '',
//           bioFr: '',
//           bioEn: '',
//           workplace: '',
//           workUrl: '',
//           behance: '',
//           dribbble: '',
//           facebook: '',
//           instagram: '',
//           linkedin: '',
//           portfolio: '',
//           twitter: ''
//         },
