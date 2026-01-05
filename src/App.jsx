import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';

function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [selectedServiceId, setSelectedServiceId] = useState(null);

    const navigateTo = (page, serviceId = null) => {
        setCurrentPage(page);
        if (serviceId) setSelectedServiceId(serviceId);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleWhatsApp = (msg = "") => {
        const num = "51999999999"; // TU NÚMERO
        const defaultMsg = "Hola EvolveLashes, quisiera agendar una cita 👁️✨";
        const finalMsg = msg || defaultMsg;
        window.open(`https://wa.me/${num}?text=${encodeURIComponent(finalMsg)}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-white font-sans text-evolve-dark">
            <Navbar
                currentPage={currentPage}
                navigateTo={navigateTo}
                handleWhatsApp={handleWhatsApp}
            />

            <main>
                {currentPage === 'home' && (
                    <Home handleWhatsApp={handleWhatsApp} navigateTo={navigateTo} />
                )}
                {currentPage === 'services' && (
                    <Services handleWhatsApp={handleWhatsApp} />
                )}
                {currentPage === 'service-detail' && (
                    <ServiceDetail
                        serviceId={selectedServiceId}
                        handleWhatsApp={handleWhatsApp}
                        navigateTo={navigateTo}
                    />
                )}
            </main>

            <Footer />
        </div>
    );
}

export default App;