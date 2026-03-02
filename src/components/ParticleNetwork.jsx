import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "@tsparticles/slim";

const ParticleNetwork = () => {
    const particlesInit = useCallback(async (engine) => {
        // loadSlim reduces the bundle size while providing all needed shapes and connections
        await loadSlim(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "grab",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        grab: {
                            distance: 140,
                            links: {
                                opacity: 0.8,
                                color: "#06b6d4" // Cyan grab link
                            }
                        },
                    },
                },
                particles: {
                    color: {
                        value: ["#4f46e5", "#06b6d4", "#a855f7"], // Indigo, Cyan, Purple
                    },
                    links: {
                        color: "#6366f1", // Indigo base link
                        distance: 150,
                        enable: true,
                        opacity: 0.3,
                        width: 1,
                        triangles: {
                            enable: true,
                            opacity: 0.05,
                            color: "#3730a3"
                        }
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 0.8,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80, // Number of nodes
                    },
                    opacity: {
                        value: 0.7,
                        animation: {
                            enable: true,
                            speed: 0.5,
                            minimumValue: 0.3,
                        }
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 3 },
                        animation: {
                            enable: true,
                            speed: 2,
                            minimumValue: 0.5
                        }
                    },
                },
                detectRetina: true,
            }}
            className="fixed inset-0 z-[-1]"
        />
    );
};

export default ParticleNetwork;
