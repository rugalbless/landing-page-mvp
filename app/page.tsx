import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CalendarDays, ClipboardList, Users, LineChart, Shield, Clock, CheckCircle2 } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <ClipboardList className="h-6 w-6 text-teal-600" />
            <span className="text-xl font-bold">GuiEnf</span>
          </div>
          <nav className="hidden md:flex gap-6">
          </nav>
          <div className="flex items-center gap-4">
            <Link href="https://mighty-publicly-sparrow.ngrok-free.app" className="text-sm font-medium hover:underline underline-offset-4">
              <Button  className="bg-teal-600 hover:bg-teal-700">Acessar Plataforma</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-teal-50 relative overflow-hidden">
          {/* Decorative blur shapes */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-teal-200/30 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 z-0"></div>
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-300/20 rounded-full blur-[60px] translate-x-1/3 translate-y-1/3 z-0"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Otimize o Gerenciamento dos Seus Pacientes
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Organize seus atendimentos com precisão: registre pacientes, acompanhe evoluções médicas e elabore orçamentos operacionais com facilidade.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-[100px] h-[100px] bg-teal-400/20 rounded-full blur-[30px] z-0"></div>
                  <Image
                    src="/placeholder.svg?height=550&width=550"
                    width={550}
                    height={550}
                    alt="Dashboard Preview"
                    className="rounded-lg shadow-xl relative z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full max-w-7xl mx-auto py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-teal-600 text-white">
                  Funcionalidades
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Tudo o que você precisa para o gerenciamento de pacientes
                </h2>

              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-teal-100 p-3">
                  <Users className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold">Registros de Pacientes</h3>
                <p className="text-center text-muted-foreground">
                  Mantenha perfis completos de pacientes com histórico médico, alergias e informações pessoais.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-teal-100 p-3">
                  <ClipboardList className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold">Evoluções Médicas</h3>
                <p className="text-center text-muted-foreground">
                  Acompanhe o progresso do tratamento, documente as consultas e monitore a evolução da saúde do paciente ao longo do tempo.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-teal-100 p-3">
                  <Clock className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold">Orçamento Operacional</h3>
                <p className="text-center text-muted-foreground">
                  Crie orçamentos detalhados para cada atendimento, controlando custos de materiais, procedimentos e recursos de forma simples e eficiente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-teal-50 relative overflow-hidden">
          {/* Decorative blur shapes */}
          <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-teal-200/40 rounded-full blur-[50px] -translate-x-1/2 -translate-y-1/2 z-0"></div>
          <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] bg-teal-300/30 rounded-full blur-[40px] translate-y-1/3 z-0"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -bottom-4 -right-4 w-[80px] h-[80px] bg-teal-400/20 rounded-full blur-[20px] z-0"></div>
                  <Image
                    src="/placeholder.svg?height=550&width=550"
                    width={550}
                    height={550}
                    alt="Doctor using MediTrack"
                    className="rounded-lg shadow-xl relative z-10"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-teal-600 text-white">
                    Benefícios
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Por que os profissionais de saúde nos escolhem
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Nossa plataforma é projetada por profissionais de saúde para profissionais de saúde.
                  </p>
                </div>
                <ul className="grid gap-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-teal-600 mt-0.5" />
                    <div>
                      <h3 className="font-bold">Reduza os erros de documentação</h3>
                      <p className="text-muted-foreground">
                        Modelos estruturados e validação garantem registros médicos precisos.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-teal-600 mt-0.5" />
                    <div>
                      <h3 className="font-bold">Melhore os resultados dos pacientes</h3>
                      <p className="text-muted-foreground">
                        Um melhor acompanhamento das evoluções médicas leva a decisões de tratamento mais informadas.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          {/* Decorative blur shapes */}
          <div className="absolute top-1/3 right-0 w-[350px] h-[350px] bg-teal-100/50 rounded-full blur-[60px] translate-x-1/2 z-0"></div>
          <div className="absolute bottom-1/4 left-1/4 w-[200px] h-[200px] bg-teal-200/30 rounded-full blur-[40px] z-0"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-teal-600 text-white">
                  Depoimentos
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Com a confiança de profissionais de saúde</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Veja o que os profissionais estão dizendo sobre nosso sistema de gerenciamento de pacientes.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">

              <div className="flex flex-col justify-between rounded-lg border p-6 shadow-sm">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    "A função de orçamento é tudo que eu precisava, me formei recentemente e não tinha ideia do quanto cobrar nas operações que teria que fazer "
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <Avatar className="h-10 w-10 border-2 border-teal-100">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Dr. Michael Chen" />
                    <AvatarFallback className="bg-teal-100 text-teal-800">MC</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Michael </p>
                    <p className="text-sm text-muted-foreground">Tecnico em enfermagem </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg border p-6 shadow-sm">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    "Graças ao GuiEnf eu não preciso mais ter que procurar meus pacientes no bloco de notas, ja sei que tenho tudo que preciso no meu perfil do sistema"
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <Avatar className="h-10 w-10 border-2 border-teal-100">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Maria Rodriguez" />
                    <AvatarFallback className="bg-teal-100 text-teal-800">MR</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Maria Rodriguez</p>
                    <p className="text-sm text-muted-foreground">Enfermeira</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg border p-6 shadow-sm">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    "O recurso de rastreamento de evolução médica é muito bom . Posso ver facilmente o progresso de um paciente ao longo do tempo e tomar decisões mais bem informadas sobre seu plano de cuidados."
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <Avatar className="h-10 w-10 border-2 border-teal-100">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Dr. James Wilson" />
                    <AvatarFallback className="bg-teal-100 text-teal-800">JW</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">James Wilson</p>
                    <p className="text-sm text-muted-foreground">Tecninco em Enfermagem</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-teal-600 text-white">
                    Contate-nos
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Tem dúvidas? Estamos aqui para ajudar
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Nossa equipe de especialistas em tecnologia de saúde está pronta para ajudá-lo com qualquer dúvida.
                  </p>
                </div>

              </div>
              <div className="rounded-lg border p-6 shadow-sm">
                <div className="grid gap-4">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-teal-100 p-2">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 text-teal-600"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <p className="text-muted-foreground">+55 (11) 111-2222</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-teal-100 p-2">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 text-teal-600"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <p className="text-muted-foreground">support@guienf.com</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-teal-100 p-2">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 text-teal-600"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <p className="text-muted-foreground"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <ClipboardList className="h-5 w-5 text-teal-600" />
            <p className="text-sm font-medium">© {new Date().getFullYear()} GuiEnf. Todos os direitos reservados.</p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-xs hover:underline underline-offset-4">
              Termos de Serviço
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4">
              Política de privacidade
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4">
              Política de Cookies
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
