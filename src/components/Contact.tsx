
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Contact: React.FC = () => {  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    console.log('formaData', formData);
    
    const name = formData.get("name") as string;

    const whatsappMessagem = `Olá, meu nome é ${name}. Estou entrando em contato através do seu portfólio.` 

    const encodedMessage = encodeURIComponent(whatsappMessagem);

    const phoneNumber = '5532998115274';

    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');

    (e.target as HTMLFormElement).reset();
  };
  
  return (
    <section id="contact" className="py-24">
      <div className="container max-w-2xl text-center">
        <div className="font-mono text-highlight mb-2">O que vem a seguir?</div>
        <h2 className="text-4xl font-bold text-slate-light mb-6">Entre em contato</h2>
        <p className="text-slate mb-10">
          Estou sempre aberta a novas oportunidades de trabalho e colaboração.
          Se você tem um projeto interessante e precisa de uma ajuda entre em contato,
          ficarei feliz em receber sua mensagem!
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div className="space-y-2">
            <label htmlFor="name" className="text-slate-light">Nome</label>
            <Input
              name="name"
              id="name"
              placeholder="Seu nome"
              required
              className="bg-navy-light border-slate/30 focus:border-highlight"
            />
          </div>
          
          <div className="text-center">
            <Button
              type="submit"
              size="lg"
              className="bg-highlight text-navy hover:bg-highlight/90 px-10"
            >
              Conversar no WhatsApp
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
