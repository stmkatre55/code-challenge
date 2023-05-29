import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, FlatList } from 'react-native';
import MenuIcon from 'react-native-vector-icons/Entypo';
import BottomArrowIcon from 'react-native-vector-icons/MaterialIcons';
import RupeeIcon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('screen');

const rawData = [
    {
        title: 'GSA BNF Directional',
        status: 'Live-Entered',
        price: '2,502 (1.00%)',
    },
    {
        title: 'GSA Nifty Directional',
        status: 'Exited',
        price: '-1,037 (-0.10%)',
    },
    {
        title: 'BankNifty Fighter Lite Positional',
        status: 'Live-Entered',
        price: '2,502 (1.00%)',
    },
    {
        title: 'BankNifty Fighter Positional',
        status: 'Live-Entered',
        price: '11,264 (1.00%)',
    },
    {
        title: 'Overnight Miner',
        status: 'Exited',
        price: '-1,037 (-0.10%)',
    },
    {
        title: 'Overnight Miner Nifty',
        status: 'Exited',
        price: '-2,337 (-0.10%)',
    },
];

const Dashboard = () => {
    const [value, setValue] = useState('43.66');
    const [pandL, setpandL] = useState('');
    const [percent, setPercent] = useState('');
    const navigation = useNavigation();

    useEffect(() => {
        setInterval(() => {
            let tempPandL = Number(value) + Math.random() * (0.09 - -0.9) + -0.9;
            let count = tempPandL - Number(value);
            setpandL(tempPandL);
            setPercent((100 * count) / Number(value));
        }, 500);
    }, []);

    const renderItem = ({ item, index }) => {
        return (
            <View
                style={{
                    borderBottomWidth: 0.17,
                    margin: '1%',
                    width: '100%',
                    paddingVertical: '2%',
                    paddingBottom: '5%',
                }}>
                <View style={{ width: '90%' }}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#3090f0' }}>
                        {item.title}
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: width / 1.1,
                        paddingTop: '1%',
                    }}>
                    <View>
                        <Text
                            style={{
                                fontSize: 13,
                                fontWeight: '400',
                                color: item.status === 'Live-Entered' ? '#A7A7A7' : '#fac943',
                            }}>
                            {item.status}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <RupeeIcon name='rupee' size={15} style={{ marginRight: '3%', marginTop: '2%' }} />
                        <Text
                            style={{
                                fontSize: 13,
                                fontWeight: '400',
                                color: item.price.includes('-') ? 'red' : 'green',
                            }}>
                            {item.price}
                        </Text>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    width: width / 1.08,
                    marginVertical: '3%',
                    alignItems: 'center',
                    flexDirection: 'row',
                    alignSelf: 'center',
                }}>
                <View
                    style={{
                        width: '15%',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                    }}>
                    <MenuIcon
                        name="menu"
                        size={30}
                        color={'#000'}
                        onPress={() => navigation.toggleDrawer()}
                    />
                </View>
                <View
                    style={{
                        width: '70%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: '#000' }}>
                        Strategies
                    </Text>
                </View>
                <View
                    style={{
                        width: '15%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}></View>
            </View>
            <View
                style={{
                    width: width / 1.08,
                    alignSelf: 'center',
                    marginVertical: '2%',
                    padding: '3%',
                    paddingVertical: '5%',
                    backgroundColor: '#3090f0',
                    alignItems: 'center',
                    borderRadius: 10,
                    paddingRight: '4%',
                }}>
                <View
                    style={{
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                    <View style={{ width: '50%', padding: '2%' }}>
                        <Text style={{ fontSize: 20, fontWeight: '600', color: '#fff' }}>
                            Summary
                        </Text>
                    </View>
                    <View
                        style={{
                            width: '50%',
                            borderWidth: 0.2,
                            borderColor: '#fff',
                            borderRadius: 5,
                            padding: '2%',
                            paddingHorizontal: '4%',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                        <Text style={{ fontSize: 16, fontWeight: '400', color: '#fff' }}>
                            Expiry
                        </Text>
                        <BottomArrowIcon
                            name="keyboard-arrow-down"
                            size={20}
                            color={'#fff'}
                        />
                    </View>
                </View>
                <View
                    style={{
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: '5%',
                    }}>
                    <View>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: '600',
                                color: '#fff',
                                textAlign: 'center',
                            }}>
                            Capital:
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '3%', }}>
                            <RupeeIcon name='rupee' size={15} style={{ marginRight: '5%', marginTop: '2%' }} color={"#fff"} />
                            <Text
                                style={{
                                    fontSize: 12,
                                    fontWeight: '400',
                                    color: '#fff',
                                    textAlign: 'center',

                                }}>
                                5.13 Cr
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: '600',
                                color: '#fff',
                                textAlign: 'center',
                            }}>
                            P&L:
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '3%', }}>
                            <RupeeIcon name='rupee' size={15} style={{ marginRight: '5%', marginTop: '2%' }} color={"#fff"} />
                            <Text
                                style={{
                                    fontSize: 12,
                                    fontWeight: '400',
                                    color: '#fff',
                                    textAlign: 'center',

                                }}>
                                {Number(pandL).toFixed(2)}
                                {percent ? `(${Number(percent).toFixed(2)}%)` : null}
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: '600',
                                color: '#fff',
                                textAlign: 'center',
                            }}>
                            Value:
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '3%', }}>
                            <RupeeIcon name='rupee' size={15} style={{ marginRight: '5%', marginTop: '2%' }} color={"#fff"} />
                            <Text
                                style={{
                                    fontSize: 12,
                                    fontWeight: '400',
                                    color: '#fff',
                                    textAlign: 'center',

                                }}>
                                {value}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ width: width / 1.08, alignSelf: 'center', margin: '3%' }}>
                <FlatList
                    data={rawData}
                    renderItem={(item, index) => renderItem(item, index)}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </View>
    );
};
export default Dashboard;
