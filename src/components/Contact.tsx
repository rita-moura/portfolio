
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const Contact: React.FC = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de envio do formulário
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato, responderei em breve.",
    });
    // Limpar formulário
    (e.target as HTMLFormElement).reset();
  };
  
  return (
    <section id="contact" className="py-24">
      <div className="container max-w-2xl text-center">
        <div className="font-mono text-highlight mb-2">04. O que vem a seguir?</div>
        <h2 className="text-4xl font-bold text-slate-light mb-6">Entre em contato</h2>
        <p className="text-slate mb-10">
          Estou sempre aberta a novas oportunidades de trabalho e colaboração.
          Se você tem um projeto interessante ou apenas quer conversar, 
          ficarei feliz em receber sua mensagem!
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-slate-light">Nome</label>
              <Input
                id="name"
                placeholder="Seu nome"
                required
                className="bg-navy-light border-slate/30 focus:border-highlight"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-slate-light">Email</label>
              <Input
                id="email"
                type="email"
                placeholder="Seu email"
                required
                className="bg-navy-light border-slate/30 focus:border-highlight"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="subject" className="text-slate-light">Assunto</label>
            <Input
              id="subject"
              placeholder="Assunto da mensagem"
              required
              className="bg-navy-light border-slate/30 focus:border-highlight"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-slate-light">Mensagem</label>
            <Textarea
              id="message"
              placeholder="Digite sua mensagem..."
              rows={6}
              required
              className="bg-navy-light border-slate/30 focus:border-highlight resize-none"
            />
          </div>
          
          <div className="text-center">
            <Button
              type="submit"
              size="lg"
              className="bg-highlight text-navy hover:bg-highlight/90 px-10"
            >
              Enviar mensagem
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
