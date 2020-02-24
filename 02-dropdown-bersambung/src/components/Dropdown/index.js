import React, { Component } from 'react';
import './dropdown.css'

class Dropdown extends Component {
    constructor() {
        super();
        this.state = {
            jenjangDropdown: true,            
            jenjangCurrent: '',
            tingkatanDropdown: true,
            tingkatanCurrent: '',
            jenjang: [
                { 
                    id: 1,
                    name: 'Pendidikan Pra Sekolah',
                    tingkat: [
                        'PAUD (Pendidikan Usia Dini)',
                        'TK (Taman Kanak-kanak)',
                        'RA (Raudhatul Athfal)'
                    ]
                },
                { 
                    id: 2,
                    name: 'Pendidikan Dasar',
                    tingkat: [
                        'SD (Sekolah Dasar)',
                        'MI (Madrasah Ibtidaiyah)',
                        'SMP (Sekolah Menengah Pertama',
                        'MTs (Madrasah Tsanawiyah)'
                    ]
                },
                { 
                    id: 3,
                    name: 'Pendidikan Menengah',
                    tingkat: [
                        'SMA (Sekolah Menengah Atas)',
                        'MA (Madrasah Aliyah)',
                        'SMK (Sekolah Menengah Kejuruan)'
                    ]
                },
                {
                    id: 4,
                    name: 'Pendidikan Tinggi',
                    tingkat: [
                        'D3 Diploma',
                        'S1/D4 Sarjana',
                        'S2 Magister',
                        'S3 Doktoral'
                    ]
                },
            ]
        }
    }

    handleClickDropdown = stateName => {
        this.setState({ [stateName]: !this.state[stateName] });
    }

    handleClickJenjangItem = id => {
        const findJenjang = this.state.jenjang.find(jenjang => jenjang.id === id);

        this.setState({ 
            jenjangCurrent: findJenjang.name,
            jenjangDropdown: !this.state.jenjangDropdown
        });
    }

    handleClickTingkatanItem = name => {
        this.setState({ 
            tingkatanCurrent: name,
            tingkatanDropdown: !this.state.tingkatanDropdown
        })
    }

    render() {
        let tingkatan = this.state.jenjang.filter(tingkatan => {
            return tingkatan.name === this.state.jenjangCurrent;
        });

        return(
            <div className="container">
                <div className="row">

                    <div className="dropdown dropdown__jenjang">
                        <span className="dropdown__caret-icon la la-angle-down"></span>
                        <h3 onClick={() => this.handleClickDropdown('jenjangDropdown')}>
                            {this.state.jenjangCurrent ? this.state.jenjangCurrent : 'Pilih Jenjang'}
                        </h3>
                        <ul className={this.state.jenjangDropdown ? 'dropdown__jenjang-list--hide' : 'dropdown__jenjang-list'}>
                            {this.state.jenjang.map((jenjang, i) => (
                                <li 
                                 key={i} 
                                 className={this.state.jenjangCurrent === jenjang.name ? 'active' : ''} 
                                 onClick={() => this.handleClickJenjangItem(jenjang.id)}
                                 >
                                    {jenjang.name}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="dropdown dropdown__tingkatan">
                        <span className="dropdown__caret-icon la la-angle-down"></span>
                        <h3 onClick={() => this.handleClickDropdown('tingkatanDropdown')}>
                            {this.state.tingkatanCurrent ? this.state.tingkatanCurrent : 'Pilih Tingkatan'}                            
                        </h3>
                        <ul className={this.state.tingkatanDropdown ? 'dropdown__tingkatan-list--hide' : 'dropdown__tingkatan-list'}>
                            {tingkatan.length ? (
                                tingkatan[0].tingkat.map((tingkat, i) => (
                                    <li 
                                     key={i} 
                                    className={this.state.tingkatanCurrent === tingkat ? 'active' : ''}
                                    onClick={() => this.handleClickTingkatanItem(tingkat)}>
                                        {tingkat}
                                    </li>
                                ))                                
                            ) : (
                                <li>Jenjang belum dipilih</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        ); 
    }
}

export default Dropdown;