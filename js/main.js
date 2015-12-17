$(document).ready(function(){

  //parallax effect
  var scene = document.getElementById('hero');
  var parallax = new Parallax(scene);

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
          name: 'Nicolas Baldovini',
          img: 'nicolas-baldovini.jpg',
          titleFr: 'UX lead',
          titleEn: 'UX lead',
          bioFr: '',
          bioEn: '',
          workplace: 'lg2',
          workUrl: 'www.lg2.com',
          behance: '',
          dribbble: '',
          facebook: '',
          instagram: '',
          linkedin: '',
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
          workUrl: 'www.jda.com',
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
          bioFr: '',
          bioEn: '',
          workplace: 'Pusher Studio',
          workUrl: '',
          behance: '',
          dribbble: '',
          facebook: 'pusherstudio',
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
          bioFr: '',
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
          bioFr: '',
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
          bioFr: '',
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
          name: 'Serena Ngai',
          img: 'serena-ngai.jpg',
          titleFr: 'Design lead',
          titleEn: 'Design lead',
          bioFr: '',
          bioEn: '',
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
          bioFr: '',
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
          workUrl: 'http://www.hec.ca/en/',
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
          bioEn: '',
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
          bioEn: '',
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
          workUrl: 'http://www.tp1.ca/',
          behance: 'patsvek',
          dribbble: '',
          facebook: '',
          instagram: '',
          linkedin: 'https://www.linkedin.com/in/patsvek',
          portfolio: 'http://www.patsvek.com/',
          twitter: 'patsvek'
        },
        {
          name: 'Christine Zoltok',
          img: 'christine-zoltok.jpg',
          titleFr: 'Designer',
          titleEn: 'Designer',
          bioFr: '',
          bioEn: '',
          workplace: 'Breather',
          workUrl: 'http://www.breather.com',
          behance: '',
          dribbble: '',
          facebook: '',
          instagram: '',
          linkedin: '',
          portfolio: '',
          twitter: 'zoltok'
        },
        {
          name: '',
          img: 'more-soon.png',
          titleFr: '',
          titleEn: '',
          bioFr: '',
          bioEn: '',
          workplace: '',
          workUrl: '',
          behance: '',
          dribbble: '',
          facebook: '',
          instagram: '',
          linkedin: '',
          portfolio: '',
          twitter: ''
        },
        {
          name: '',
          img: 'more-soon.png',
          titleFr: '',
          titleEn: '',
          bioFr: '',
          bioEn: '',
          workplace: '',
          workUrl: '',
          behance: '',
          dribbble: '',
          facebook: '',
          instagram: '',
          linkedin: '',
          portfolio: '',
          twitter: ''
        },
        {
          name: '',
          img: 'more-soon.png',
          titleFr: '',
          titleEn: '',
          bioFr: '',
          bioEn: '',
          workplace: '',
          workUrl: '',
          behance: '',
          dribbble: '',
          facebook: '',
          instagram: '',
          linkedin: '',
          portfolio: '',
          twitter: ''
        },
        {
          name: '',
          img: 'more-soon.png',
          titleFr: '',
          titleEn: '',
          bioFr: '',
          bioEn: '',
          workplace: '',
          workUrl: '',
          behance: '',
          dribbble: '',
          facebook: '',
          instagram: '',
          linkedin: '',
          portfolio: '',
          twitter: ''
        },
        {
          name: '',
          img: 'more-soon.png',
          titleFr: '',
          titleEn: '',
          bioFr: '',
          bioEn: '',
          workplace: '',
          workUrl: '',
          behance: '',
          dribbble: '',
          facebook: '',
          instagram: '',
          linkedin: '',
          portfolio: '',
          twitter: ''
        },
        {
          name: '',
          img: 'more-soon.png',
          titleFr: '',
          titleEn: '',
          bioFr: '',
          bioEn: '',
          workplace: '',
          workUrl: '',
          behance: '',
          dribbble: '',
          facebook: '',
          instagram: '',
          linkedin: '',
          portfolio: '',
          twitter: ''
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
