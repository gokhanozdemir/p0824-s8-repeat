import { useState, useEffect } from "react"
import Profiles from "./components/Profiles"
import Login from "./components/Login";
import {
  Switch,
  Route,
  Link, NavLink
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
function App() {
  /*
    TASK
    1. useHistory dökümantasyonundaki (https://v5.reactrouter.com/web/api/Hooks/usehistory) gibi 
      - gereksinimleri import et.
      - hook'u çalıştır ve bir history instance oluştur.
      - handleLogin fonksiyonunu "/who-is-watching" sayfasına yönlenecek şekilde güncelle.
    
    2. Profile.jsx componentinde ismin yazıldığı span'ı Link ile değiştir. 
  
    2. Navigasyondan "Kim İzliyor'u" kaldır. Profiller sadece Login sonrası görüntülenmeli.
  
    3. Seçilen profilin bilgilerinin görüntülenmesi.
      - useParams dökümantasyondaki (https://v5.reactrouter.com/web/api/Hooks/useparams) gibi gerejsinimleri import et. 
      - App.jsx içine dökümantasyondaki "BlogPost" componentini, kopyala ve "ProfileDetail" adıyla güncelle.
       - "ProfileDetail" içinde hook'u çalıştır ve "profileID" isimli bir parametreyi okuyacak şekilde hazırlık yap. 
    
    4. App.jsx'e yeni bir Route ekle. 
     - path'i "/profile" sonunda "profileID" yakalayacak şekilde, en alta ekle.
     - İlgili rota eşleşirse, ProfileDetail componenti render edilmeli.
  
    5. Router test edin.
  
  */




  return (


    <Switch>
      <Route path="/who-is-watching">
        <Profiles />
      </Route>

      <Route path="/" >
        {/* FIXME: sayfa kenarında üstte bir boşluk kaldı */}
        <LoginPage />

      </Route>
    </Switch>


  )
}

export default App
