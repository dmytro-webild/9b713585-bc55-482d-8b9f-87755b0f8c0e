"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroLogoBillboardSplit from '@/components/sections/hero/HeroLogoBillboardSplit';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactText from '@/components/sections/contact/ContactText';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { Award, CheckCircle, HelpCircle, Shield, Sparkles, Star, User, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-shift"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="mediumLarge"
      sizing="largeSmall"
      background="floatingGradient"
      cardStyle="soft-shadow"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="solid"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Sobre", id: "about" },
            { name: "Especialidades", id: "services" },
            { name: "Resultados", id: "metrics" },
            { name: "Dúvidas", id: "faq" },
            { name: "Contato", id: "contact" }
          ]}
          brandName="Dr. Luiz Gustavo Gomes"
          button={{
            text: "Agendar Consulta",            href: "#contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboardSplit
          logoText="Dr. Luiz Gustavo Gomes"
          description="Especialista em Reumatologia com experiência comprovada no tratamento de doenças inflamatórias e autoimunes. Oferecemos cuidado personalizado, diagnóstico preciso e planos de tratamento inovadores para melhorar sua qualidade de vida."
          background={{ variant: "radial-gradient" }}
          buttons={[
            { text: "Agendar Consulta", href: "#contact" },
            { text: "Saiba Mais", href: "#about" }
          ]}
          buttonAnimation="slide-up"
          layoutOrder="default"
          imageSrc="http://img.b2bpic.net/free-photo/african-american-medic-talking-elderly-woman-with-disability-chekcup-visit-appointment-senior-patient-with-impairment-wheelchair-husband-receiving-medical-disease-treatment_482257-49399.jpg"
          imageAlt="Clínica de Reumatologia"
          mediaAnimation="blur-reveal"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          tag="Sobre o Especialista"
          tagIcon={Shield}
          tagAnimation="slide-up"
          title="Expertise e Cuidado Reumatológico de Excelência"
          useInvertedBackground={false}
          buttons={[
            { text: "Conhecer Abordagem", href: "#services" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwentySix
          title="Especialidades Reumatológicas"
          description="Atendimento completo para todas as condições reumatológicas, com diagnóstico preciso e tratamentos modernos personalizados para cada paciente."
          tag="Serviços"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              title: "Artrite Reumatoide",              description: "Diagnóstico e tratamento especializado da artrite reumatoide com terapias biológicas e convencionais.",              buttonIcon: CheckCircle,
              imageSrc: "http://img.b2bpic.net/free-photo/chiropractor-checking-spine_1098-16910.jpg"
            },
            {
              title: "Doenças Autoimunes",              description: "Manejo completo de lúpus, síndrome de Sjögren, esclerodermia e outras doenças autoimunes.",              buttonIcon: Shield,
              imageSrc: "http://img.b2bpic.net/free-photo/spacious-empty-healthcare-office-with-modern-medical-equipment_482257-108375.jpg"
            },
            {
              title: "Reabilitação e Fisioterapia",              description: "Programas personalizados de reabilitação para melhorar mobilidade e função articular.",              buttonIcon: Zap,
              imageSrc: "http://img.b2bpic.net/free-photo/high-angle-smiley-doctor-holding-patient-s-hands_23-2149389039.jpg"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Resultados e Impacto"
          description="Números que refletem nosso compromisso com a excelência no cuidado reumatológico e satisfação do paciente."
          tag="Resultados Comprovados"
          tagIcon={Award}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="uniform-all-items-equal"
          animationType="opacity"
          metrics={[
            {
              id: "patients",              value: "2.500+",              title: "Pacientes Atendidos",              description: "Cuidado contínuo e personalizado",              icon: User
            },
            {
              id: "experience",              value: "15+",              title: "Anos Experiência",              description: "Especialização reconhecida",              icon: Award
            },
            {
              id: "satisfaction",              value: "98%",              title: "Satisfação",              description: "Pacientes satisfeitos",              icon: Star
            },
            {
              id: "recovery",              value: "85%",              title: "Melhoria Clínica",              description: "Resposta ao tratamento",              icon: Zap
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTen
          title="O Que Nossos Pacientes Dizem"
          description="Histórias reais de pacientes que recuperaram qualidade de vida através do tratamento reumatológico especializado."
          textboxLayout="default"
          useInvertedBackground={false}
          tag="Depoimentos"
          tagIcon={Star}
          tagAnimation="slide-up"
          testimonials={[
            {
              id: "testimonial-1",              title: "Recuperei Minha Vida",              quote: "Depois de anos com dor crônica, finalmente encontrei um tratamento que funciona. O Dr. Luiz foi atencioso e explicou tudo com clareza. Hoje consigo fazer atividades que havia abandonado.",              name: "Maria Silva",              role: "Paciente há 3 anos",              imageSrc: "http://img.b2bpic.net/free-photo/doctor-helping-patient-side-view_23-2149866162.jpg"
            },
            {
              id: "testimonial-2",              title: "Profissionalismo Exemplar",              quote: "Consultei vários reumatologistas, mas aqui encontrei o cuidado humanizado que eu buscava. Recomendo para todos os meus amigos e familiares.",              name: "João Santos",              role: "Paciente há 2 anos"
            },
            {
              id: "testimonial-3",              title: "Tratamento Moderno e Eficaz",              quote: "As terapias biológicas prescritas pelo Dr. Luiz mudaram completamente meu quadro. Sinto-me muito melhor e com esperança no futuro.",              name: "Carla Oliveira",              role: "Paciente há 1 ano"
            },
            {
              id: "testimonial-4",              title: "Diagnóstico Preciso",              quote: "Levei tempo para ter um diagnóstico certo, mas aqui foi feito rapidamente com equipamentos modernos. Muito obrigado pelo cuidado.",              name: "Robert Mendes",              role: "Paciente há 6 meses"
            },
            {
              id: "testimonial-5",              title: "Equipe Atenciosa",              quote: "Do primeiro atendimento até o acompanhamento, todo mundo é muito prestativo e dedicado. Sinto-me seguro durante meu tratamento.",              name: "Ana Costa",              role: "Paciente há 4 meses"
            },
            {
              id: "testimonial-6",              title: "Continuidade do Cuidado",              quote: "Excelente acompanhamento contínuo. O Dr. Luiz se importa genuinamente com o progresso de cada paciente. Altamente recomendado!",              name: "Paulo Ferreira",              role: "Paciente há 18 meses"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Perguntas Frequentes"
          description="Respostas às dúvidas mais comuns sobre reumatologia, tratamentos e atendimento."
          tag="Informações"
          tagIcon={HelpCircle}
          tagAnimation="slide-up"
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="smooth"
          faqs={[
            {
              id: "faq-1",              title: "O que é Reumatologia?",              content: "Reumatologia é a especialidade médica que diagnostica e trata doenças que afetam as articulações, ossos, músculos e tecidos conectivos. Inclui condições como artrite reumatoide, lúpus, gota e osteoporose."
            },
            {
              id: "faq-2",              title: "Quando devo consultar um reumatologista?",              content: "Procure um reumatologista se apresentar dor articular persistente, inchaço, rigidez matinal prolongada, febre sem causa aparente ou qualquer sinal de doença autoimune. Sua avaliação precoce é importante para melhor resultado."
            },
            {
              id: "faq-3",              title: "Quais são as opções de tratamento disponíveis?",              content: "Oferecemos tratamentos convencionais com anti-inflamatórios, corticoides, e terapias biológicas modernas. Cada plano é personalizado conforme o diagnóstico e necessidade individual do paciente."
            },
            {
              id: "faq-4",              title: "Como é feito o diagnóstico?",              content: "O diagnóstico inclui avaliação clínica detalhada, exames de sangue específicos, ultrassom articular e eventualmente ressonância magnética. Utilizamos equipamentos modernos para precisão máxima."
            },
            {
              id: "faq-5",              title: "Qual é o tempo de resposta ao tratamento?",              content: "Os tratamentos convencionais podem levar de 4 a 8 semanas para mostrar efeito. Terapias biológicas costumam responder mais rapidamente. O acompanhamento regular é essencial para avaliar a resposta."
            },
            {
              id: "faq-6",              title: "Aceita convênios?",              content: "Sim, aceitamos a maioria dos principais convênios de saúde. Consulte nossa equipe para informações específicas sobre seu plano de saúde e disponibilidade de agendamento."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Agende sua consulta agora e dê o primeiro passo para melhorar sua qualidade de vida. Nossa equipe está pronta para atendê-lo com excelência."
          animationType="entrance-slide"
          buttons={[
            { text: "Ligar Agora", href: "tel:+5511999999999" },
            { text: "Agendar Online", href: "https://agendamento.example.com" }
          ]}
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-doctor_23-2148485966.jpg"
          imageAlt="Dr. Luiz Gustavo Gomes - Reumatologia"
          logoText="Dr. Luiz Gustavo Gomes"
          copyrightText="© 2024 Dr. Luiz Gustavo Gomes - Reumatologia. Todos os direitos reservados."
          columns={[
            {
              title: "Navegação",              items: [
                { label: "Sobre", href: "#about" },
                { label: "Especialidades", href: "#services" },
                { label: "Resultados", href: "#metrics" }
              ]
            },
            {
              title: "Contato",              items: [
                { label: "Telefone", href: "tel:+5511999999999" },
                { label: "Email", href: "mailto:contato@exemplo.com" },
                { label: "Endereço", href: "#" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacidade", href: "#" },
                { label: "Termos", href: "#" },
                { label: "Política", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
