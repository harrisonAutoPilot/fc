import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  innerContainer: {
    width: '90%',
    alignSelf: 'center',
    padding: 10,
    backgroundColor: 'rgba(226, 225, 236, 1)',
    borderRadius: 4,
  },
  card: {
    width: '80%',
    padding: 20,
    paddingHorizontal: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(121, 116, 126, 0.16)',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  cardNoLine: {
    width: '80%',
    padding: 20,
    paddingHorizontal: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  leftCover: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    alignItems: 'flex-start',
  },
  imgCover: {
    width: 55,
    height: 55,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderWidth: 0,
    borderColor: '#F2F0F4',
  },
  contentCover: {
    width: '82%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginTop: 5,
  },
  bgText: {
    color: 'rgba(90, 93, 114, 1)',
    fontSize: 14,
    fontFamily: 'AnekLatin-Medium',
    lineHeight: 20,
    letterSpacing: 0.25,
  },
  smText: {
    color: 'rgba(90, 93, 114, 1)',
    fontSize: 14,
    fontFamily: 'AnekLatin-Regular',
    lineHeight: 20,
    letterSpacing: 0.25,
  },
  arrowCover: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightImg: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  img: {
    width: 22,
    height: 22,
  },

  topContainer: {
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  managerImgCover: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginVertical: 10,
    marginTop: 30,
  },
  managerImg: {
    width: 98,
    height: 98,
    borderRadius: 100,
    resizeMode: 'contain',
  },
  managerName: {
    color:'rgba(69, 70, 79, 1)',
    fontSize: 22,
    fontFamily: 'AnekLatin-SemiBold',
    lineHeight: 28,
    letterSpacing: 0.25,
    marginBottom: 30,
  },
});
