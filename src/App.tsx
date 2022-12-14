import { Heading } from "./components/Heading";
import { Text } from "./components/Text";
import { TextInput } from "./components/TextInput";
import { Logo } from "./Logo";
import { Envelope, Lock } from "phosphor-react";
import { Checkbox } from "./components/Checkbox";
import { Button } from "./components/Button";
function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>

        <Text size="lg" className="text-gray-400 ">
          Faça login e comece a usar.
        </Text>
      </header>

      <form className="flex flex-col items-stretch w-full max-w-[400px] mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Enderenço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              placeholder="Digite seu e-mail"
              name="email"
              id="email"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              placeholder="***********"
              name="password"
              id="password"
              type="password"
            />
          </TextInput.Root>
        </label>

        <label
          htmlFor="remember"
          className="flex items-center gap-2 select-none mt-5"
        >
          <Checkbox id="remember" />
          Lembra-me de min por 30 dias
        </label>

        <Button className="mt-4" type="submit">
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Esqueceu sua senha?
          </a>
        </Text>

        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Não possui conta? crie uma agora.
          </a>
        </Text>
      </footer>
    </div>
  );
}

export default App;
