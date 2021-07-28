(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{387:function(a,e,s){"use strict";s.r(e);var o=s(29),t=Object(o.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"factory-method-gof-🔨"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#factory-method-gof-🔨"}},[a._v("#")]),a._v(" Factory Method (GOF) 🔨")]),a._v(" "),s("p",[s("sup",{staticClass:"footnote-ref"},[s("a",{attrs:{href:"#fn1",id:"fnref1"}},[a._v("[1]")])])]),a._v(" "),s("h2",{attrs:{id:"intencao"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#intencao"}},[a._v("#")]),a._v(" Intenção")]),a._v(" "),s("p",[a._v("Definir uma interface para criar um objeto, mas deixar as subclasses decidirem que classe instanciar. O Factory Method permite adiar a instanciação para subclasses.")]),a._v(" "),s("h2",{attrs:{id:"tambem-conhecido-como"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tambem-conhecido-como"}},[a._v("#")]),a._v(" Também conhecido como")]),a._v(" "),s("p",[a._v("Virtual Constructor")]),a._v(" "),s("h2",{attrs:{id:"motivacao"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#motivacao"}},[a._v("#")]),a._v(" Motivação")]),a._v(" "),s("p",[a._v("Os frameworks usam classes abstratas para definir e manter relacionamentos entre objetos. Um framework é freqüentemente responsável também pela criação desses objetos.")]),a._v(" "),s("p",[a._v("Considere um framework para aplicações que podem apresentar múltiplos documentos para o usuário. Duas abstrações-chave nesse framework são as classes Application (aplicação) e Document (documento). As duas classes são abstratas, e os clientes devem prover subclasses para realizar suas implementações específicas para a aplicação. Por exemplo, para criar uma aplicação de desenho, definimos as classes DrawingApplication e DrawingDocument. A classe Application é responsável pela administração de Documents e irá criá-los conforme exigido — quando o usuário seleciona Open (abrir) ou New (novo), por exemplo, num menu.")]),a._v(" "),s("p",[a._v("Uma vez que a subclasse Document a ser instanciada é própria da aplicação específica, a classe Application não pode prever a subclasse de Document a ser instanciada — a classe Application somente sabe quando um documento deve ser criado, e não que tipo de Document criar. Isso cria um dilema: o framework deve instanciar classes, mas ele somente tem conhecimento de classes abstratas, as quais não pode instanciar.")]),a._v(" "),s("p",[a._v("O padrão Factory Method oferece uma solução. Ele encapsula o conhecimento sobre a subclasse de Document que deve ser criada e move este conhecimento para fora do framework.")]),a._v(" "),s("img",{attrs:{src:"https://www.plantuml.com/plantuml/svg/PP9B3e8m443tFSKiTG47G4qmSSiXQXcL15lI3XY3tDsfKYoLrV3AlFcKqf6qrDzR8S-Eh5G4gfNEmSce_ewQHW7yZE5q0jEXtcnJgbhZSCPE3Y6qEA0bVfb4Mk3OTMsZ93L6_zLG5YLXQ65sQNmanBSI8QxnLLVFFtbgzCmd10APYJi2A6gZd8ZH_fLbQpM8wha8zidXJnqo5o24DeHWc-kDm5pMUKMnxXM4NoFrLliDH1gU67KDNfKALxfeRzwrn3mW73xET3ax_ioFdykwtd0GGFwz-rrKj-IG_vut",alt:"uml diagram"}}),a._v(" "),s("p",[a._v("As subclasses de "),s("code",[a._v("Application")]),a._v(" redefinem uma operação abstrata "),s("code",[a._v("createDocument")]),a._v(" em "),s("code",[a._v("Application")]),a._v(" para retornar a subclasse apropriada de "),s("code",[a._v("Document.")]),a._v(" Uma vez que uma subclasse de "),s("code",[a._v("Application")]),a._v(" é instanciada, pode então instanciar "),s("code",[a._v("Documents")]),a._v(" específicos da aplicação sem conhecer suas classes. Chamamos "),s("code",[a._v("createDocument")]),a._v(" um "),s("strong",[a._v("factory method")]),a._v(' porque ele é responsável pela "manufatura" de um objeto.')]),a._v(" "),s("h2",{attrs:{id:"aplicabilidade"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aplicabilidade"}},[a._v("#")]),a._v(" Aplicabilidade")]),a._v(" "),s("p",[a._v("Use o padrão Factory Method quando:")]),a._v(" "),s("ul",[s("li",[a._v("uma classe não pode antecipar a classe de objetos que deve criam;")]),a._v(" "),s("li",[a._v("uma classe quer que suas subclasses especifiquem os objetos que criam;")]),a._v(" "),s("li",[a._v("classes delegam responsabilidade para uma dentre várias subclasses auxiliares, e você quer o conhecimento de qual subclasse auxiliar que é a delegada.")])]),a._v(" "),s("h2",{attrs:{id:"estrutura"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#estrutura"}},[a._v("#")]),a._v(" Estrutura")]),a._v(" "),s("img",{attrs:{src:"https://www.plantuml.com/plantuml/svg/PP712i8m38RlVOeSzR0zm9mmy2pw2hNBt62s8yqGcNjtCsdHTJs4yl_9nqzIUTR4uwDN-kQPj64mlVOUhkJgqV2aPfLQ9qBDZYO5ygPepj18TVGw8xUktks_jhQN0KbpvwmemWe8PmqXumgLpajtyA5yPraw12eA8IkKcnuLhJKXgafPnmZKtLi6rwJJHR6A199It94iM7ocC0cCjeO5kC56tDys5bYUvrA74EQOBk0GMdxOIhvogmy0",alt:"uml diagram"}}),a._v(" "),s("h2",{attrs:{id:"participantes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#participantes"}},[a._v("#")]),a._v(" Participantes")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("Product")]),a._v(" (Document)\n"),s("ul",[s("li",[a._v("define a interface de objetos que o "),s("code",[a._v("factoryMethod")]),a._v(" cria.")])])]),a._v(" "),s("li",[s("strong",[a._v("ConcreteProduct")]),a._v(" (MyDocument)\n"),s("ul",[s("li",[a._v("implementa a interface de "),s("code",[a._v("Product")]),a._v(".")])])]),a._v(" "),s("li",[s("strong",[a._v("Creator")]),a._v(" (Application)\n"),s("ul",[s("li",[a._v("Declara o "),s("code",[a._v("factoryMethod")]),a._v(", o qual retorna um objeto do tipo "),s("code",[a._v("Product")]),a._v(". "),s("code",[a._v("Creator")]),a._v(" pode também definir uma implementação por omissão do "),s("code",[a._v("factoryMethod")]),a._v(" que retorna por omissão um objeto "),s("code",[a._v("ConcreteProduct")]),a._v(".")]),a._v(" "),s("li",[a._v("Pode chamar o "),s("code",[a._v("factoryMethod")]),a._v(" para criar um objeto "),s("code",[a._v("Product.")])])])]),a._v(" "),s("li",[s("strong",[a._v("ConcreteCreator")]),a._v(" (MyApplication)\n"),s("ul",[s("li",[a._v("Redefine o "),s("code",[a._v("factoryMethod")]),a._v(" para retornar a uma instância de um\n"),s("code",[a._v("ConcreteProduct.")])])])])]),a._v(" "),s("h2",{attrs:{id:"colaboracoes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#colaboracoes"}},[a._v("#")]),a._v(" Colaborações")]),a._v(" "),s("ul",[s("li",[a._v("Creator depende das suas subclasses para definir o método de fábrica de maneira que retorne uma instância do ConcreteProduct apropriado.")])]),a._v(" "),s("h2",{attrs:{id:"consequencias"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#consequencias"}},[a._v("#")]),a._v(" Consequências")]),a._v(" "),s("p",[a._v("Os Factory Methods eliminam a necessidade de anexar classes específicas das aplicações no código. O código lida somente com a interface de "),s("code",[a._v("Product")]),a._v("; portanto, ele pode trabalhar com quaisquer classes "),s("code",[a._v("ConcreteProduct")]),a._v(" definidas pelo usuário.")]),a._v(" "),s("p",[a._v("Uma desvantagem em potencial dos Factory Methods é que os clientes podem ter que fornecer subclasses da classe "),s("code",[a._v("Creator")]),a._v(" somente para criar um objeto "),s("code",[a._v("ConcreteProduct")]),a._v(" em particular. Usar subclasses é bom quando o cliente tem que fornecer subclasses a "),s("code",[a._v("Creator")]),a._v(" de qualquer maneira, caso contrário, o cliente deve lidar com outro ponto de evolução.")]),a._v(" "),s("p",[a._v("Apresentamos aqui duas consequências adicionais do Factory Method:")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("Fornece ganchos para subclasses. Criar objetos dentro de uma classe com um método de fábrica é sempre mais flexível do que criar um objeto diretamente. Factory Method dá às subclasses um gancho para fornecer uma versão estendida de um objeto. No exemplo de Documentos, a classe "),s("code",[a._v("Document")]),a._v(" poderia definir um Factory Method chamado "),s("code",[a._v("createFileDialog")]),a._v(" que cria um objeto file dialog por omissão para abrir um documento existente. Uma de "),s("code",[a._v("Document")]),a._v(" pode definir um "),s("code",[a._v("fileDialog")]),a._v(" específico da aplicação redefinindo este método de fábrica. Neste caso, o método de fábrica não é abstrato, mas fornece uma implementação por omissão razoável.")])]),a._v(" "),s("li",[s("p",[a._v("Conecta hierarquias de classe paralelas. Nos exemplos que consideramos até aqui o Factory Method é somente chamado por "),s("code",[a._v("Creators")]),a._v(". Mas isto não precisa ser obrigatoriamente assim; os clientes podem achar os Factory Method úteis, especialmente no caso de hierarquias de classe paralelas. Hierarquias de classe paralelas ocorrem quando uma classe delega alguma das suas responsabilidades para uma classe separada. Considere, por exemplo, figuras que podem ser manipuladas interativamente; ou seja, podem ser esticadas, movidas ou giradas usando o mouse. Implementar tais interações não é sempre fácil. Isso frequentemente requer armazenar e atualizar informação que registra o estado da manipulação num certo momento. Este estado é necessário somente durante a manipulação; portanto, não necessita ser mantido no objeto-figura. Além do mais, diferentes figuras se comportam de modo diferente quando são manipuladas pelo usuário. Por exemplo, esticar uma linha pode ter o efeito de mover um dos extremos, enquanto que esticar um texto pode mudar o seu espaçamento de linhas.\nCom essas restrições, é melhor usar um objeto "),s("code",[a._v("Manipulator")]),a._v(" separado, que implementa a interação e mantém o registro de qualquer estado específico da manipulação que for necessário. Diferentes figuras utilizarão diferentes subclasses "),s("code",[a._v("Manipulator")]),a._v(" para tratar interações específicas. A hierarquia de classes "),s("code",[a._v("Manipulator")]),a._v(" resultante é paralela (ao menos parcialmente) à hierarquia de classes de "),s("code",[a._v("Figure")]),a._v(":")])])]),a._v(" "),s("img",{attrs:{src:"https://www.plantuml.com/plantuml/svg/dPB12i8m38RlUOeSzJ2VG8OWUDARBv1jOHQtRhGfAdFlxcHAkrL4tANmvy_tD-asLiY8gokWp8gXN32lo5hSgT8PxW27htlNUimDa_21j6fTHTAOnH9wWB5dhpI7VL_DHxxA3-RHWkjxaWJyYUn90FCn0buqIz5SzBPI-Nb8cfSCbR7gshTzCdAKCGS7j0-8v_N_HWIDVaU161jcSNx32GvSriBmEZ59SUBq-yTL6YNvPtXMevYJAXYvRkM6969KveHjgDOifwQmi65T33_a0m00",alt:"uml diagram"}}),a._v(" "),s("p",[a._v("A classe "),s("code",[a._v("Figure")]),a._v(" fornece um método de fábrica "),s("code",[a._v("createManipulator")]),a._v(" que permite aos clientes criar o correspondente "),s("code",[a._v("Manipulator")]),a._v(" de uma "),s("code",[a._v("Figure")]),a._v(". As subclasses de "),s("code",[a._v("Figure")]),a._v(" substituem esse método para retornar uma instância da subclasse "),s("code",[a._v("Manipulator")]),a._v(" correta para elas. Como alternativa, a classe "),s("code",[a._v("Figure")]),a._v(" pode implementar "),s("code",[a._v("createManipulator")]),a._v(" para retornar por omissão uma instância de manipulator, e as subclasses de "),s("code",[a._v("Figure")]),a._v(" podem simplesmente herdar essa instância por omissão. As classes "),s("code",[a._v("Figure")]),a._v(" que fizerem assim não necessitarão de uma subclasse correspondente de "),s("code",[a._v("Manipulator")]),a._v(" — por isso dizemos que as hierarquias são somente parcialmente paralelas. Note como o método de fábrica define a conexão entre as duas hierarquias de classes. Nele se localiza o conhecimento de quais classes trabalham juntas.")]),a._v(" "),s("h2",{attrs:{id:"implementacao"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implementacao"}},[a._v("#")]),a._v(" Implementação")]),a._v(" "),s("p",[a._v("Considere os seguintes tópicos ao aplicar o padrão Factory Method:")]),a._v(" "),s("ol",[s("li",[a._v("Duas variedades principais. As duas principais variações do padrão Factory Method são: (1) o caso em que a classe "),s("code",[a._v("Creator")]),a._v(" é uma classe abstrata e não fornece uma implementação para o método de fábrica que ela declara, e (2) o caso quando o "),s("code",[a._v("Creator")]),a._v(" é uma classe concreta e fornece uma implementação por omissão para o método de fábrica. Também é possível ter uma classe abstrata que define uma implementação por omissão, mas isto é menos comum. O primeiro caso exige subclasses para definir uma implementação porque não existe uma omissão razoável, assim contornando o dilema de ter que instanciar classes imprevisíveis. No segundo caso, o "),s("code",[a._v("ConcretCreator")]),a._v(' usa o método de fábrica principalmente por razões de flexibilidade. Está seguindo uma regra que diz: "criar objetos numa operação separada de modo que subclasses possam redefinir a maneira como eles são criados". Essa regra garante que projetistas de subclasses, caso necessário, possam mudar a classe de objetos que a classe ancestral instancia.')]),a._v(" "),s("li",[a._v("Métodos de fábrica parametrizados. Uma outra variante do padrão permite ao método de fábrica criar múltiplos tipos de produtos. O método de fábrica recebe um parâmetro que identifica o objeto a ser criado.")])]),a._v(" "),s("p",[a._v("Todos os objetos que o método de fábrica cria compartilharão a interface de "),s("code",[a._v("Product")]),a._v(". No exemplo de "),s("code",[a._v("Document")]),a._v(", "),s("code",[a._v("Application")]),a._v(" pode suportar diferentes tipos de Documents. Você passa a "),s("code",[a._v("createDocument")]),a._v(" um parâmetro extra para especificar o tipo de documento a ser criado.")]),a._v(" "),s("p",[a._v("O framework de edição gráfica Unidraw [VL90] usa esta abordagem para reconstruir objetos salvos em disco. Unidraw define uma classe creator com método de fábrica "),s("code",[a._v("Create")]),a._v(" que aceita um identificador de classe como argumento. O identificador de classe especifica a classe a ser instanciada. Quando Unidraw salva um objeto em disco, primeiro grava o identificador da classe, e então suas variáveis de instância. Quando reconstrói o objeto de disco, primeiro lê o identificador de classe.")]),a._v(" "),s("p",[a._v("Depois que o identificador de classe é lido, o framework chama "),s("code",[a._v("Create")]),a._v(", passando o identificador como o parâmetro. "),s("code",[a._v("Create")]),a._v(" procura o constructor para a classe correspondente, utilizando-o para instanciar o objeto. Por último, "),s("code",[a._v("Create")]),a._v(" chama a operação "),s("code",[a._v("read")]),a._v(" do objeto, a qual lê a informação restante do disco e inicia as variáveis de instância do objeto.")]),a._v(" "),s("p",[a._v("Um método de fábrica parametrizado tem a seguinte forma geral, onde "),s("code",[a._v("MyProduct")]),a._v(" e "),s("code",[a._v("YourProduct")]),a._v(" São subclasses de "),s("code",[a._v("Product")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Creator")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Product")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ProductId")]),a._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("id "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" MINE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MyProduct")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("id "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" YOURS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("YourProduct")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// repete para os produtos restantes")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("p",[a._v("Redefinir um método de fábrica parametrizado permite, fácil e seletivamente, estender ou mudar os produtos que um "),s("code",[a._v("Creator")]),a._v(" produz. Você pode introduzir novos identificadores para novos tipos de produtos, ou pode associar identificadores existentes com diferentes produtos.")]),a._v(" "),s("p",[a._v("Por exemplo, uma subclasse "),s("code",[a._v("MyCreator")]),a._v(" poderia trocar "),s("code",[a._v("MyProduct")]),a._v(" por "),s("code",[a._v("YourProduct")]),a._v(" e suportar uma nova subclasse "),s("code",[a._v("TheirProduct")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MyCreator")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Creator")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Product")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ProductId")]),a._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("id "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" YOURS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MyProduct")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("id "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" MINE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("YourProduct")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// nota: YOURS e MINE foram trocados propositadamente")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("id "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" THEIR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("TheirProduct")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])]),s("p",[a._v("Note que a última coisa que essa operação faz é chamar "),s("code",[a._v("create")]),a._v(" na classe-mãe. Isso porque "),s("code",[a._v("MyCreator.create")]),a._v(" trata somente YOURS, MINE e THEIRS de modo diferente da classe-mãe.")]),a._v(" "),s("p",[a._v("Ela não está interessada em outras classes. Daí dizermos que "),s("code",[a._v("MyCreator")]),a._v(" estende os tipos de produtos criados e adia a responsabilidade da criação de todos, exceto uns poucos produtos, para sua superclasse.")]),a._v(" "),s("h2",{attrs:{id:"exemplo-de-codigo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exemplo-de-codigo"}},[a._v("#")]),a._v(" Exemplo de código")]),a._v(" "),s("h2",{attrs:{id:"usos-conhecidos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usos-conhecidos"}},[a._v("#")]),a._v(" Usos conhecidos")]),a._v(" "),s("h2",{attrs:{id:"padrao-relacionados"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#padrao-relacionados"}},[a._v("#")]),a._v(" Padrão relacionados")]),a._v(" "),s("h2",{attrs:{id:"referencias"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#referencias"}},[a._v("#")]),a._v(" Referências")]),a._v(" "),s("hr",{staticClass:"footnotes-sep"}),a._v(" "),s("section",{staticClass:"footnotes"},[s("ol",{staticClass:"footnotes-list"},[s("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[s("p",[a._v("GAMMA, Erich. et al. Padrões de projetos: Soluções reutilizáveis de software orientados a objetos Bookman editora, 2009. "),s("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[a._v("↩︎")])])])])])])}),[],!1,null,null,null);e.default=t.exports}}]);