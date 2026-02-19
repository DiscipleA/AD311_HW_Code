import { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";
import { fetchJsonOrThrow } from "../../src/api/coingecko";

type Coin = {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number | null;
};

const MARKET_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,dogecoin&order=market_cap_desc&per_page=3&page=1&sparkline=false";

export default function HomeScreen() {
  const scheme = useColorScheme();
  const isDark = scheme === "dark";

  const [data, setData] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const json = await fetchJsonOrThrow(MARKET_URL);

      // shape validation like your Node app
      if (!Array.isArray(json)) {
        throw new Error("Invalid market data from API.");
      }

      // Basic runtime validation for expected fields
      const cleaned: Coin[] = json.map((c: any) => ({
        id: String(c.id),
        name: String(c.name),
        symbol: String(c.symbol),
        current_price: Number(c.current_price),
        price_change_percentage_24h:
          c.price_change_percentage_24h == null
            ? null
            : Number(c.price_change_percentage_24h),
      }));

      setData(cleaned);
    } catch (e: any) {
      const status = Number.isInteger(e?.status) ? e.status : 500;

      const msg =
        status === 429
          ? "Rate limit reached. Please wait 60s."
          : status === 502
            ? "CoinGecko returned an unexpected response. Try again shortly."
            : status === 408
              ? "Request timed out. Try again."
              : e?.message || "Something went wrong.";

      setError(msg);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const textColor = isDark ? "#fff" : "#111";
  const mutedColor = isDark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.7)";
  const cardBg = isDark ? "#111" : "#fff";
  const borderColor = isDark ? "rgba(255,255,255,0.25)" : "#ddd";
  const screenBg = isDark ? "#000" : "#f6f6f6";

  return (
    <View style={[styles.container, { backgroundColor: screenBg }]}>
      <Text style={[styles.title, { color: textColor }]}>Crypto Prices</Text>
      <Text style={[styles.subtitle, { color: mutedColor }]}>
        Fetched from CoinGecko API
      </Text>

      {loading ? (
        <View style={{ marginTop: 24 }}>
          <ActivityIndicator size="large" />
          <Text
            style={{ marginTop: 10, textAlign: "center", color: mutedColor }}
          >
            Loading prices...
          </Text>
        </View>
      ) : error ? (
        <View style={{ marginTop: 16 }}>
          <Text style={{ color: "crimson", marginBottom: 10 }}>{error}</Text>
          <Pressable
            onPress={load}
            style={[styles.button, { borderColor, backgroundColor: cardBg }]}
          >
            <Text style={{ fontWeight: "600", color: textColor }}>Retry</Text>
          </Pressable>
        </View>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          onRefresh={load}
          refreshing={loading}
          renderItem={({ item }) => {
            const change = item.price_change_percentage_24h;
            const changeText =
              change == null
                ? "N/A"
                : `${change >= 0 ? "+" : ""}${change.toFixed(2)}%`;

            return (
              <View
                style={[styles.card, { borderColor, backgroundColor: cardBg }]}
              >
                <Text
                  style={{ fontSize: 18, fontWeight: "700", color: textColor }}
                >
                  {item.name} ({item.symbol.toUpperCase()})
                </Text>
                <Text style={{ marginTop: 6, color: textColor }}>
                  Price: ${item.current_price.toLocaleString()}
                </Text>
                <Text style={{ marginTop: 4, color: mutedColor }}>
                  24h: {changeText}
                </Text>
              </View>
            );
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: "700", marginBottom: 8 },
  subtitle: { marginBottom: 12 },
  card: {
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 12,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
});

// import { Image } from 'expo-image';
// import { Platform, StyleSheet } from 'react-native';

// import { HelloWave } from '@/components/hello-wave';
// import ParallaxScrollView from '@/components/parallax-scroll-view';
// import { ThemedText } from '@/components/themed-text';
// import { ThemedView } from '@/components/themed-view';
// import { Link } from 'expo-router';

// export default function HomeScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Welcome!</ThemedText>
//         <HelloWave />
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
//         <ThemedText>
//           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
//           Press{' '}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({
//               ios: 'cmd + d',
//               android: 'cmd + m',
//               web: 'F12',
//             })}
//           </ThemedText>{' '}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <Link href="/modal">
//           <Link.Trigger>
//             <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//           </Link.Trigger>
//           <Link.Preview />
//           <Link.Menu>
//             <Link.MenuAction title="Action" icon="cube" onPress={() => alert('Action pressed')} />
//             <Link.MenuAction
//               title="Share"
//               icon="square.and.arrow.up"
//               onPress={() => alert('Share pressed')}
//             />
//             <Link.Menu title="More" icon="ellipsis">
//               <Link.MenuAction
//                 title="Delete"
//                 icon="trash"
//                 destructive
//                 onPress={() => alert('Delete pressed')}
//               />
//             </Link.Menu>
//           </Link.Menu>
//         </Link>

//         <ThemedText>
//           {`Tap the Explore tab to learn more about what's included in this starter app.`}
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
//         <ThemedText>
//           {`When you're ready, run `}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });
