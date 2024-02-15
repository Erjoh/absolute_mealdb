import React from 'react';
import {ROUTES} from "utils/ROUTES";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss"
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation('navbarLinks');
    // const navigate = useNavigate()
    // const [search, setSearch] = useState('')

    const handleSearch = () => {
        // navigate(`/search/${search}`)
    }
    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <AppLink
                to={ROUTES.HOME_PAGE}>
                {t('Logo')}
            </AppLink>
            <div>
                <AppLink
                    theme={AppLinkTheme.PRIMARY}
                    to={ROUTES.HOME_PAGE}>
                    {t('Home')}
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.PRIMARY}
                    to={ROUTES.ABOUT_PAGE}>
                    {t('About')}
                </AppLink>
                {/*<AppLink to={'/seafood'}>Seafood</AppLink>*/}
                {/*<AppLink to={'/categories'}>Categories</AppLink>*/}
                {/*    <div>*/}
                {/*<input className={'header-search'} onChange={(e) => setSearch(e.target.value)} type="text"/>*/}
                {/*        <button className={'header-btn'} onClick={handleSearch}>Search</button>*/}
                {/*    </div>*/}
            </div>
        </header>
    );
};