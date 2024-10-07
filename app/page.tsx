'use client';

import Image from 'next/image';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useEffect, useState } from 'react';

export default function Home() {
    const alignCenter = { display: 'flex', alignItems: 'center' };

    const [showFirstLayer, setShowFirstLayer] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowFirstLayer((prev) => !prev);
        }, 5000); // alterna a cada 3 segundos

        return () => clearInterval(interval); // limpa o intervalo ao desmontar
    }, []);

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div
                    style={{
                        width: '50%',
                        backgroundColor: 'white',
                        position: 'relative',
                        zIndex: -1,
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '10px',
                        }}
                    >
                        <Image
                            src='/Images/logo.png'
                            alt='Logo'
                            width={250}
                            height={50}
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                </div>

                <div
                    style={{
                        flexBasis: '300px',
                        position: 'relative',
                    }}
                >
                    <Parallax
                        pages={2}
                        style={{
                            width: '100%',
                            position: 'fixed',
                            right: 0,
                            zIndex: -1,
                        }}
                    >
                        <ParallaxLayer
                            offset={0}
                            speed={0.5}
                            style={{
                                ...alignCenter,
                                justifyContent: 'flex-start',
                                transition: 'opacity 1s ease-in-out', // transição suave
                                opacity: showFirstLayer ? 1 : 0, // controla a opacidade com base no estado
                            }}
                        >
                            <div style={{ padding: 20, marginTop: 60 }}>
                                <h1
                                    style={{
                                        fontSize: 20,
                                        color: 'white',
                                        backgroundColor: '#E4217F',
                                        display: 'inline-block',
                                        padding: '2px',
                                        fontFamily: 'Montserrat, sans-serif',
                                    }}
                                >
                                    18 À 21 DE OUTUBRO
                                </h1>
                                <h1
                                    style={{
                                        fontSize: 50,
                                        maxWidth: '480px',
                                        wordWrap: 'break-word',
                                        lineHeight: '1.0',
                                        marginTop: 10,
                                        fontFamily: 'Montserrat, sans-serif',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Vem aí a mansão mais esperada do ano
                                </h1>
                            </div>
                        </ParallaxLayer>

                        {/* Segundo ParallaxLayer */}
                        <ParallaxLayer
                            offset={0}
                            speed={0.5}
                            style={{
                                ...alignCenter,
                                justifyContent: 'flex-start',
                                transition: 'opacity 1s ease-in-out', // transição suave
                                opacity: showFirstLayer ? 0 : 1, // controla a opacidade com base no estado
                            }}
                        >
                            <div
                                style={{
                                    padding: 20,
                                    backgroundColor: 'white',
                                    width: 500,
                                }}
                            >
                                <h1
                                    style={{
                                        fontSize: 20,
                                        color: 'white',
                                        backgroundColor: '#E4217F',
                                        display: 'inline-block',
                                        padding: '2px',
                                        fontFamily: 'Montserrat, sans-serif',
                                    }}
                                >
                                    15 PARTICIPANTES
                                </h1>
                                <h1
                                    style={{
                                        fontSize: 50,
                                        maxWidth: '580px',
                                        wordWrap: 'break-word',
                                        lineHeight: '1.0',
                                        marginTop: 10,
                                        fontFamily: 'Montserrat, sans-serif',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Criando os mais quentes conteúdos da
                                    Internet
                                </h1>
                            </div>
                        </ParallaxLayer>

                        <ParallaxLayer
                            offset={0.2}
                            speed={0.2}
                            style={{
                                ...alignCenter,
                                justifyContent: 'flex-end',
                                zIndex: 1000,
                            }}
                        >
                            <Image
                                src='/Images/model1.png'
                                alt='Imagem 9'
                                width={180}
                                height={180}
                                style={{
                                    borderRadius: '15px',
                                    marginRight: 320,
                                    marginBottom: 540,
                                }}
                            />
                        </ParallaxLayer>
                        <ParallaxLayer
                            offset={0.3}
                            speed={0.2}
                            style={{
                                ...alignCenter,
                                justifyContent: 'flex-end',
                                zIndex: 1000,
                            }}
                        >
                            <Image
                                src='/Images/model2.png'
                                alt='Imagem 9'
                                width={180}
                                height={180}
                                style={{
                                    marginRight: 160,
                                    marginBottom: 550,
                                }}
                            />
                        </ParallaxLayer>
                        <ParallaxLayer
                            offset={0.2}
                            speed={0.2}
                            style={{
                                ...alignCenter,
                                justifyContent: 'flex-end',
                                zIndex: 1000,
                            }}
                        >
                            <Image
                                src='/Images/model3.png'
                                alt='Imagem 9'
                                width={180}
                                height={180}
                                style={{
                                    borderRadius: '15px',
                                    marginBottom: 680,
                                }}
                            />
                        </ParallaxLayer>

                        <ParallaxLayer
                            offset={0.3}
                            speed={0.2}
                            style={{
                                ...alignCenter,
                                justifyContent: 'flex-end',
                                zIndex: 1000,
                            }}
                        >
                            <Image
                                src='/Images/model4.png'
                                alt='Imagem 9'
                                width={180}
                                height={180}
                                style={{
                                    borderRadius: '15px',
                                    marginBottom: 300,
                                }}
                            />
                        </ParallaxLayer>

                        <ParallaxLayer
                            offset={0.3}
                            speed={0.2}
                            style={{
                                ...alignCenter,
                                justifyContent: 'flex-end',
                                zIndex: 1000,
                            }}
                        >
                            <Image
                                src='/Images/model5.png'
                                alt='Imagem 9'
                                width={180}
                                height={180}
                                style={{
                                    borderRadius: '15px',
                                    marginRight: 320,
                                    marginBottom: 200,
                                }}
                            />
                        </ParallaxLayer>

                        <ParallaxLayer
                            offset={0.3}
                            speed={0.2}
                            style={{
                                ...alignCenter,
                                justifyContent: 'flex-end',
                                zIndex: 1000,
                            }}
                        >
                            <Image
                                src='/Images/model6.png'
                                alt='Imagem 9'
                                width={180}
                                height={180}
                                style={{
                                    marginRight: 160,
                                    marginBottom: 40,
                                }}
                            />
                        </ParallaxLayer>

                        <ParallaxLayer
                            offset={0.8}
                            speed={0.2}
                            style={{
                                ...alignCenter,
                                justifyContent: 'flex-end',
                                zIndex: 1000,
                            }}
                        >
                            <Image
                                src='/Images/model7.png'
                                alt='Imagem 9'
                                width={180}
                                height={180}
                                style={{
                                    borderRadius: '15px',
                                    marginBottom: 430,
                                }}
                            />
                        </ParallaxLayer>

                        <ParallaxLayer
                            offset={0.9}
                            speed={0.2}
                            style={{
                                ...alignCenter,
                                justifyContent: 'flex-end',
                                zIndex: 1000,
                            }}
                        >
                            <Image
                                src='/Images/model8.png'
                                alt='Imagem 9'
                                width={180}
                                height={180}
                                style={{
                                    borderRadius: '15px',
                                    marginRight: 320,
                                    marginBottom: 470,
                                }}
                            />
                        </ParallaxLayer>

                        <ParallaxLayer
                            offset={0.8}
                            speed={0.2}
                            style={{
                                ...alignCenter,
                                justifyContent: 'flex-end',
                                zIndex: 1000,
                            }}
                        >
                            <Image
                                src='/Images/model9.png'
                                alt='Imagem 9'
                                width={180}
                                height={180}
                                style={{
                                    marginRight: 160,
                                    marginBottom: 140,
                                }}
                            />
                        </ParallaxLayer>

                        <ParallaxLayer
                            offset={0.8}
                            speed={0.2}
                            style={{
                                ...alignCenter,
                                justifyContent: 'flex-end',
                                zIndex: 1000,
                            }}
                        >
                            <Image
                                src='/Images/model10.png'
                                alt='Imagem 9'
                                width={180}
                                height={180}
                                style={{
                                    borderRadius: '15px',
                                    marginBottom: -177,
                                }}
                            />
                        </ParallaxLayer>

                        <ParallaxLayer
                            offset={0.9}
                            speed={0.2}
                            style={{
                                ...alignCenter,
                                justifyContent: 'flex-end',
                                zIndex: 1000,
                            }}
                        >
                            <Image
                                src='/Images/model11.png'
                                alt='Imagem 9'
                                width={180}
                                height={180}
                                style={{
                                    borderRadius: '15px',
                                    marginRight: 320,
                                    marginBottom: -56,
                                }}
                            />
                        </ParallaxLayer>

                        <ParallaxLayer
                            offset={0.8}
                            speed={0.2}
                            style={{
                                ...alignCenter,
                                justifyContent: 'flex-end',
                                zIndex: 1000,
                            }}
                        >
                            <Image
                                src='/Images/model12.png'
                                alt='Imagem 9'
                                width={180}
                                height={180}
                                style={{
                                    marginRight: 160,
                                    marginBottom: -400,
                                }}
                            />
                        </ParallaxLayer>

                        <ParallaxLayer
                            offset={0.8}
                            speed={0.2}
                            style={{
                                ...alignCenter,
                                justifyContent: 'flex-end',
                                zIndex: 1000,
                            }}
                        >
                            <Image
                                src='/Images/model13.png'
                                alt='Imagem 9'
                                width={180}
                                height={180}
                                style={{
                                    borderRadius: '15px',
                                    marginBottom: -800,
                                }}
                            />
                        </ParallaxLayer>

                        <ParallaxLayer
                            offset={0.9}
                            speed={0.2}
                            style={{
                                ...alignCenter,
                                justifyContent: 'flex-end',
                                zIndex: 1000,
                            }}
                        >
                            <Image
                                src='/Images/model14.png'
                                alt='Imagem 9'
                                width={180}
                                height={180}
                                style={{
                                    borderRadius: '15px',
                                    marginRight: 320,
                                    marginBottom: -620,
                                }}
                            />
                        </ParallaxLayer>

                        <ParallaxLayer
                            offset={0.9}
                            speed={0.2}
                            style={{
                                ...alignCenter,
                                justifyContent: 'flex-end',
                                zIndex: 1000,
                            }}
                        >
                            <Image
                                src='/Images/model15.png'
                                alt='Imagem 9'
                                width={180}
                                height={180}
                                style={{
                                    marginRight: 160,
                                    marginBottom: -800,
                                }}
                            />
                        </ParallaxLayer>
                        <ParallaxLayer
                            offset={1}
                            speed={0.3}
                            style={{
                                justifyContent: 'flex-start',
                                backgroundColor: '#000',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '10px',
                                }}
                            >
                                <Image
                                    src='/Images/logonegativo.png'
                                    alt='Logo'
                                    width={250}
                                    height={50}
                                    style={{ cursor: 'pointer' }}
                                />
                            </div>
                            <div style={{ padding: 20 }}>
                                <h1
                                    style={{
                                        fontSize: 20,
                                        color: 'white',
                                        display: 'inline-block', // Alterado para inline-block
                                        padding: '2px', // Adicionando um padding
                                        fontFamily: 'Montserrat, sans-serif', // Adicionando a fonte
                                    }}
                                >
                                    Estamos preparando muitas novidades
                                </h1>
                                <h1
                                    style={{
                                        fontSize: 40,
                                        maxWidth: '600px', // Definindo uma largura máxima
                                        wordWrap: 'break-word', // Quebra de linha para o texto
                                        lineHeight: '1.0', // Ajustando a altura da linha (opcional)
                                        marginTop: 10,
                                        fontFamily: 'Montserrat, sans-serif', // Adicionando a fonte
                                        fontWeight: 'bold',
                                        color: 'white',
                                    }}
                                >
                                    Fique por dentro de tudo que está rolando e
                                    tenha vantagens exclusivas na assinatura VIP
                                </h1>
                            </div>
                            <div
                                style={{
                                    padding: 30,
                                    marginTop: 10,
                                    display: 'flex',
                                    alignItems: 'center',
                                    backgroundColor: 'black',
                                    maxWidth: 480,
                                    height: 120,
                                }}
                            >
                                <Image
                                    src='/Images/arrowleft.png'
                                    alt='Seta para baixo'
                                    width={50}
                                    height={50}
                                    style={{
                                        marginRight: '30px',
                                    }}
                                />
                                <button
                                    style={{
                                        fontSize: 20,
                                        color: 'white',
                                        fontFamily: 'Montserrat, sans-serif',
                                        backgroundColor: '#E4217F',
                                        borderRadius: 8,
                                        padding: 10,
                                        fontWeight: 'bold',
                                    }}
                                >
                                    PARTICIPAR DO GRUPO FREE
                                </button>
                            </div>
                        </ParallaxLayer>
                    </Parallax>
                </div>
            </div>
        </>
    );
}
