import React from 'react';
import Radio from '../Form/Radio';
import { Container, Formulario } from './style';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

const Question = () => {
  const [respostas, setRespostas] = React.useState({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
  });
  const [slide, setSlide] = React.useState(0);
  const [resultado, setResultado] = React.useState(null);

  function handleChange({ target }) {
    setRespostas({ ...respostas, [target.id]: target.value });
  }

  const result = () => {
    const corretas = perguntas.filter(
      ({ id, resposta }) => respostas[id] === resposta
    );
    setResultado(`Você acertou: ${corretas.length} de ${perguntas.length}`);
  };

  const nextSlide = () => {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide - 1);
      result();
    }
  };

  const question = perguntas.map((pergunta, index) => (
    <Radio
      active={slide === index}
      key={pergunta.id}
      value={respostas[pergunta.id]}
      handleChange={handleChange}
      {...pergunta}
    />
  ));

  return (
    <Container>
      <Formulario onSubmit={(event) => event.preventDefault()}>
        {resultado ? null : question}

        {resultado ? (
          <p>{resultado}</p>
        ) : (
          <button onClick={nextSlide}>Proximo</button>
        )}
      </Formulario>
    </Container>
  );
};

export default Question;
