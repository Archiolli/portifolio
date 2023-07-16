import AOS from 'aos';
import 'aos/dist/aos.css';

const initializeAOS = () => {
  AOS.init({
    // Configurações opcionais (veja a documentação para mais opções)
    offset: 200,
    duration: 600,
    easing: 'ease-in-out',
    delay: 100,
    useClassNames: true
  });
  
};

export default initializeAOS;