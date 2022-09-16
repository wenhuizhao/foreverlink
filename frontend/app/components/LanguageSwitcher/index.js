import React from 'react';

import { injectIntl } from 'react-intl';
import { Grid, MenuItem, Select } from '@material-ui/core';
import './style.scss';

const languages = [
    { languageName: 'eng', value: 'en' },
    { languageName: 'de', value: 'de' },
    { languageName: 'fr', value: 'fr' },
];

/* eslint-disable react/prefer-stateless-function */
class LanguageSwitcher extends React.Component {
    t(msg, values) {
        return this.props.intl.formatMessage(msg, values);
    }

    render() {
        return (
            <Grid className="LanguageSwitcher">
                <Select
                    inputProps={{
                        name: 'lang',
                        id: 'lang',
                        className: 'languageSelectWrap',
                    }}
                    value={this.props.locale}
                    onChange={e => {
                        this.props.onChange(e.target.value);
                    }}
                    className="languageSwitcher"
                >
                    {languages.map(language => (
                        <MenuItem key={language.value} value={language.value}>
                            <span className="countryName">{language.languageName}</span>
                        </MenuItem>
                    ))}
                </Select>
            </Grid>
        );
    }
}
export default injectIntl(LanguageSwitcher);
