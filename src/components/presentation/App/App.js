import React from 'react';
import HomeView from '../homeView/homeView';
import WatchOnTv from '../watchOnTv/watchOnTv';
import DownloadSection from '../downloadSection/downloadSection';
import WatchOnDevice from '../watchOnDevice/watchOnDevice';
import Footer from '../footer/footer';

const App = () => {
    return(
        <>
            <HomeView />
            <WatchOnTv />
            <DownloadSection />
            <WatchOnDevice />
            <Footer />
        </>
    )
}

export default App;