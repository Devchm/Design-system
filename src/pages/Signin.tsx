import { Envelope } from "phosphor-react";
import { Button } from "../components/Button";
import { CheckBox } from "../components/CheckBox";
import { Heading } from "../components/Heading";
import { TextInput } from "../components/TextInput";
import { Logo } from "../styles/Logo";
import { Text } from "../components/Text"
import { Lock } from "phosphor-react"
import { FormEvent, useState } from "react";

export function SignIn() {
  const [ isUserSignedIn, setIsUserSignedIn] = useState(false)

   function handleSignIn(event: FormEvent) {
     event.preventDefault()

     setIsUserSignedIn(true)

   }


  return(
    <div className="w-screen h-screen bg-gray-600 flex flex-col items-center justify-center text-black">

    <header className='flex flex-col items-center'>

      <Logo/>
      <Heading size="lg" className="mt-4">Designer</Heading>

      <Text size="lg" className="text-gray-100 mt-2">Faça o Login</Text>

    </header>

    <form onSubmit={handleSingIN} className='flex flex-col items-stretch w-full max-w-[400px] mt-10 gap-4'>
      <label htmlFor="email" className='flex flex-col gap-3'>
        <Text>Enderço de email</Text>
        <TextInput.Root>
          <TextInput.Icon>
            <Envelope/>
          </TextInput.Icon>
          <TextInput.Input type="email" id="email" placeholder='Digite seu email'>

          </TextInput.Input >
        </TextInput.Root>
      </label>

      <label htmlFor="password" className='flex flex-col gap-3'>
        <Text>Sua senha</Text>
        <TextInput.Root>
          <TextInput.Icon>
            <Lock/>
          </TextInput.Icon>
          <TextInput.Input type="password" id="password" placeholder='********'>

          </TextInput.Input >
        </TextInput.Root>
      </label>
      <label htmlFor="remember"className='flex items-center gap-2'>
        <CheckBox id="rmember"/>
        <Text size="sm" className='text-gray-200'>Lembrar de mim por 30 dias</Text>
      </label>
      <Button type="submit" className='mt-4'>
        Entrar na plataforma
      </Button>
    </form>

    <footer className='flex flex-col items-center gap-4 mt-8'>
      <Text asChild size="sm">
         <a className='text-gray-400 underline hover:text-gray-100' href="">Esqueceu sua senha?</a>
      </Text>
      <Text asChild size="sm">
         <a className='text-gray-400 underline hover:text-gray-100' href="">Não possui conta? Crie uma Agora!</a>
      </Text>


   

    </footer>


     
  </div>
)

  
}

function useStat(): [any] {
  throw new Error("Function not implemented.");
}
